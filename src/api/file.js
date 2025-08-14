import express from 'express'
import {
    getAllFiles,
    getFileById,
    createFile
} from '../application/File.js'

const fileRouter = express.Router()

fileRouter.get('/getallfile', getAllFiles)
fileRouter.get('/getfile/:id', getFileById)
fileRouter.post('/createfile', createFile)

export default fileRouter
