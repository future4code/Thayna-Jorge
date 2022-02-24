import express, {Express} from "express"
import cors from "cors"
import { creatUsers } from "./endpoints/creatUsers"
import { getUsers } from "./endpoints/getUsers"
import connection from "./connection"
import { creatProduct } from "./endpoints/creatProduct"
import { getProducts } from "./endpoints/getProducts"
import { regisCompra } from "./endpoints/regisCompra"

const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=> {
    console.log("Servidor Rodando")
})


app.post("/users", creatUsers)
app.get("/users", getUsers)

app.post("/products", creatProduct)
app.get("/products", getProducts)

app.post("/purchases", regisCompra)
export default app