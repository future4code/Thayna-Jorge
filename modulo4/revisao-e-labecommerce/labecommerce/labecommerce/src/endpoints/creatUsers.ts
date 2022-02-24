import {Request, Response} from "express"
import dotenv from "dotenv"
import connection from "../connection"

dotenv.config()

export const creatUsers = async (req: Request, res:Response) => {
    console.log("oi")
    console.log(connection.client.config)
    try{
        const id = Date.now().toString()
        const {name, email, password} = req.body

        await connection.raw(`
            INSERT INTO  labecommerce_users VALUE(
                "${id}",
                "${name}",
                "${email}",
                "${password}"
            )
        `)
        
        res.status(200).send("Usuário criado")
        
    }
    catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    }
}