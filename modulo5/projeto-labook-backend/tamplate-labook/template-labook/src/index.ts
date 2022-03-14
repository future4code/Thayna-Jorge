import express, {Express} from "express"
import cors from "cors"
import { userRouter } from "./router/UserRouter"

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=> {
   console.log("Servidor Rodando")
})

app.use('/users', userRouter)