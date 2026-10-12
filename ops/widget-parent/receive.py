#!/usr/bin/env python3
"""Forced SSH command: only a bounded static page overlay, never application source."""
import hashlib
import io
import os
from pathlib import Path
import re
import subprocess
import sys
import tarfile
import tempfile
import urllib.request

BASE = 'sha256:0f9db1a3c6f822b1e2a7e11541aa50dfe424632a63383579ee9be8d303761677'
SITE = Path('/opt/phoenix/phoenix.legacy.welcome')
STATE = Path('/opt/phoenix/widget-parent')
FILES = {'index.html', 'partner.js', 'parent.css'}


def run(*args, **kwargs):
    return subprocess.check_output(args, **kwargs).decode().strip()


def page_hashes():
    result = {}
    for path in ('/', '/author', '/org', '/start', '/robots.txt', '/sitemap.xml'):
        with urllib.request.urlopen('https://welcome.phoenixlegacy.ru' + path, timeout=20) as response:
            assert response.status == 200
            result[path] = hashlib.sha256(response.read()).hexdigest()
    return result


def compose(image):
    override = STATE / 'image.json'
    import json
    override.write_text(json.dumps({'services': {'welcome': {'image': image}}}))
    run('docker', 'compose', '-p', 'phoenix-welcome-static',
        '-f', str(SITE / 'docker-compose.yml'), '-f', str(SITE / 'compose.storage.json'),
        '-f', str(override), 'up', '-d', '--no-build', '--no-deps', '--wait', '--wait-timeout', '60', 'welcome')


def deploy(sha, payload):
    before = page_hashes()
    previous = run('docker', 'inspect', 'phoenix_welcome_next', '--format', '{{.Image}}')
    # Reject unrelated runtime replacements; do not resurrect the incident image.
    label = run('docker', 'inspect', 'phoenix_welcome_next', '--format', '{{index .Config.Labels "org.gotov.widget-parent"}}')
    assert previous == BASE or label == 'true', 'Unreviewed welcome runtime'
    STATE.mkdir(mode=0o700, parents=True, exist_ok=True)
    image = 'phoenix-widget-parent:' + sha
    with tempfile.TemporaryDirectory(dir=STATE) as directory:
        context = Path(directory)
        page = context / 'page'
        page.mkdir()
        with tarfile.open(fileobj=io.BytesIO(payload), mode='r|gz') as archive:
            seen = set()
            for member in archive:
                assert member.name in FILES and member.name not in seen
                assert member.isfile() and 0 < member.size < 32768
                data = archive.extractfile(member).read(32768)
                assert len(data) == member.size
                (page / member.name).write_bytes(data)
                seen.add(member.name)
            assert seen == FILES
        # Preserve the restored static runtime and all existing site assets.
        run('docker', 'cp', 'phoenix_welcome_next:/etc/nginx/conf.d/default.conf', str(context / 'default.conf'))
        config = (context / 'default.conf').read_text()
        assert '/gotov-widget-prototype/' not in config or label == 'true'
        if '/gotov-widget-prototype/' not in config:
            assert config.count('location / {') == 1
            config = config.replace('location / {', '''location ^~ /gotov-widget-prototype/ {
        add_header Cache-Control "no-store" always;
        add_header X-Robots-Tag "noindex, nofollow" always;
        add_header X-Content-Type-Options "nosniff" always;
        try_files $uri $uri/ =404;
    }
    location / {''')
        (context / 'default.conf').write_text(config)
        (context / 'Dockerfile').write_text(
            'FROM ' + BASE + '\n'
            'COPY page/ /usr/share/nginx/html/gotov-widget-prototype/\n'
            'COPY default.conf /etc/nginx/conf.d/default.conf\n'
            'LABEL org.gotov.widget-parent=true org.opencontainers.image.revision=' + sha + '\n')
        run('docker', 'build', '--network=none', '-t', image, str(context))
        run('docker', 'run', '--rm', '--network=none', '--read-only', '--tmpfs', '/tmp', image, 'nginx', '-t')
    try:
        compose(image)
        # Ingress may cache container DNS briefly after replacement.
        import time
        for attempt in range(15):
            try:
                assert page_hashes() == before, 'Existing pages changed'
                with urllib.request.urlopen('https://welcome.phoenixlegacy.ru/gotov-widget-prototype/', timeout=20) as response:
                    assert response.status == 200
                    assert response.headers.get('Cache-Control') == 'no-store'
                    assert b'widgetqa.176.98.176.245.sslip.io' in response.read()
                break
            except Exception:
                if attempt == 14:
                    raise
                time.sleep(2)
    except BaseException:
        compose(previous)
        raise
    (STATE / 'previous-image').write_text(previous + '\n')
    (STATE / 'REVISION').write_text(sha + '\n')
    print('Published static widget parent ' + sha + '; six existing pages unchanged')


if __name__ == '__main__':
    command = os.environ.get('SSH_ORIGINAL_COMMAND', '')
    match = re.fullmatch(r'deploy ([0-9a-f]{40})', command)
    if not match:
        raise SystemExit('Only deploy <exact SHA> is permitted')
    # Bound compressed input as well as each expanded file; no shell or tar extraction.
    payload = sys.stdin.buffer.read(131073)
    assert len(payload) <= 131072
    import fcntl
    STATE.mkdir(mode=0o700, parents=True, exist_ok=True)
    with (STATE / 'deploy.lock').open('w') as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        deploy(match.group(1), payload)
