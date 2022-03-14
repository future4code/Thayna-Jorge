import express from "express"
import { UserController } from "../controller/UserController"

export const userRouter = express.Router()


userRouter.post('/users/signup', new UserController().signup)

userRouter.post('/users/login', new UserController().login)