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
