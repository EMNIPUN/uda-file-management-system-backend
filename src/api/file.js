import { getAllFiles, getFileById, createFile } from '../application/file.js';

export default async function handler(req, res) {
    if (req.method === 'GET' && req.url.startsWith('/getallfile')) {
        await getAllFiles(req, res);
    } else if (req.method === 'GET' && req.url.startsWith('/getfile/')) {
        await getFileById(req, res);
    } else if (req.method === 'POST' && req.url.startsWith('/createfile')) {
        await createFile(req, res);
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}
