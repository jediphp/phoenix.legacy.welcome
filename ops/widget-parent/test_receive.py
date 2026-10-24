import importlib.util
import io
from pathlib import Path
import tarfile
import tempfile
import unittest
from unittest.mock import patch

spec = importlib.util.spec_from_file_location('receiver', Path(__file__).with_name('receive.py'))
receiver = importlib.util.module_from_spec(spec)
spec.loader.exec_module(receiver)


class PayloadTests(unittest.TestCase):
    def test_path_traversal_rejected_before_build_or_compose(self):
        payload = io.BytesIO()
        with tarfile.open(fileobj=payload, mode='w:gz') as archive:
            member = tarfile.TarInfo('../index.html')
            member.size = 1
            archive.addfile(member, io.BytesIO(b'x'))
        with tempfile.TemporaryDirectory() as d:
            with patch.object(receiver, 'STATE', Path(d)), patch.object(receiver, 'page_hashes', return_value={}), \
                    patch.object(receiver, 'run', side_effect=[receiver.BASE, '', receiver.BASE]), patch.object(receiver, 'compose') as compose:
                with self.assertRaises(AssertionError):
                    receiver.deploy('a' * 40, payload.getvalue())
                compose.assert_not_called()

    def test_unreviewed_runtime_rejected(self):
        with patch.object(receiver, 'page_hashes', return_value={}), patch.object(receiver, 'run', side_effect=['sha256:unreviewed', '']):
            with self.assertRaises(AssertionError):
                receiver.deploy('a' * 40, b'')

    def test_previous_insecure_base_rejected(self):
        old = 'sha256:0f9db1a3c6f822b1e2a7e11541aa50dfe424632a63383579ee9be8d303761677'
        with patch.object(receiver, 'page_hashes', return_value={}), patch.object(receiver, 'run', side_effect=[old, '']):
            with self.assertRaisesRegex(AssertionError, 'Unreviewed welcome runtime'):
                receiver.deploy('a' * 40, b'')

    def test_security_base_with_existing_qa_location_keeps_runtime(self):
        payload = io.BytesIO()
        with tarfile.open(fileobj=payload, mode='w:gz') as archive:
            for name in sorted(receiver.FILES):
                member = tarfile.TarInfo(name)
                member.size = 1
                archive.addfile(member, io.BytesIO(b'x'))
        class BuildReached(Exception):
            pass
        def command(*args):
            if args[:3] == ('docker', 'inspect', 'phoenix_welcome_next'):
                return receiver.BASE if args[-1] == '{{.Image}}' else ''
            if args[:3] == ('docker', 'image', 'inspect'):
                return receiver.BASE
            if args[:2] == ('docker', 'cp'):
                Path(args[-1]).write_text('listen 3000; root /usr/share/nginx/html; location ^~ /gotov-widget-prototype/ {} location / {}')
                return ''
            if args[:2] == ('docker', 'build'):
                dockerfile = (Path(args[-1]) / 'Dockerfile').read_text()
                self.assertIn('FROM phoenix-legacy-welcome:static-secure-20261022\n', dockerfile)
                self.assertIn('COPY page/', dockerfile)
                raise BuildReached()
            self.fail('Unexpected command: ' + repr(args))
        with tempfile.TemporaryDirectory() as d:
            with patch.object(receiver, 'STATE', Path(d)), patch.object(receiver, 'page_hashes', return_value={}), patch.object(receiver, 'run', side_effect=command), patch.object(receiver, 'compose') as compose:
                with self.assertRaises(BuildReached):
                    receiver.deploy('a' * 40, payload.getvalue())
                compose.assert_not_called()
