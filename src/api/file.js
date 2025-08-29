import express from 'express'
import { getAllFiles, getFileById, createFile, deleteFile, updateFile } from '../application/file.js';

export default async function fileRouter(req, res) {
    const { method, url } = req;


    if (method === 'GET' && url.startsWith('/getallfile')) {
        await getAllFiles(req, res);
        return;
    }
        if (method === 'GET' && url.startsWith('/getfile/')) {
        const id = url.split('/getfile/')[1];
        req.params = { id };
        await getFileById(req, res);
        return;
    }

    if (method === 'POST' && url.startsWith('/createfile')) {
        await createFile(req, res);
        return;
    }

    if (method === 'DELETE' && url.startsWith('/deletefile/')) {
        const id = url.split('/deletefile/')[1];
        req.params = { id };
        await deleteFile(req, res);
        return;
    }

    if (method === 'PUT' && url.startsWith('/updatefile/')) {
        const id = url.split('/updatefile/')[1];
        req.params = { id };
        await updateFile(req, res);
        return;
    }

    res.status(404).json({ message: 'Not found' });
}
