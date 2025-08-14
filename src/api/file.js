import express from 'express'
import {
    getAllFiles,
    getFileById,
    createFile
} from '../application/File.js'

const fileRouter = express.Router()

fileRouter.get('/', getAllFiles)
fileRouter.get('/:id', getFileById)
fileRouter.post('/', createFile)

export default fileRouter
