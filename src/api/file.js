import express from 'express'
import { getAllFiles, getFileById, createFile } from '../application/file.js';

export default async function fileRouter(req, res) {
    const { method, url } = req;


    if (method === 'GET' && url.startsWith('/getallfile')) {
        await getAllFiles(req, res);
        return;
    }
        if (method === 'GET' && url.startsWith('/getfile/')) {
        await getFileById(req, res);
        return;
    }

    if (method === 'POST' && url.startsWith('/createfile')) {
        await createFile(req, res);
        return;
    }

    res.status(404).json({ message: 'Not found' });
}
