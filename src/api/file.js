import { getAllFiles, getFileById, createFile } from '../application/file.js';

export default async function handler(req, res) {
    if (req.method === 'GET' && req.url.startsWith('/api/file/getallfile')) {
        await getAllFiles(req, res);
    } else if (req.method === 'GET' && req.url.startsWith('/api/file/getfile/:id')) {
        await getFileById(req, res);
    } else if (req.method === 'POST' && req.url.startsWith('/api/file/createfile')) {
        await createFile(req, res);
    } else {
        res.status(404).json({ message: 'Not found' });
    }
}
