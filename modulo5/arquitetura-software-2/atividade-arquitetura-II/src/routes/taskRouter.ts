import express from "express"
import { createTask } from "../controller/task/createTask"
import { getTaskById } from "../controller/task/getTaskById"

export const taskRouter = express.Router()
taskRouter.post('/task', createTask)
taskRouter.post('/task/:id', getTaskById)