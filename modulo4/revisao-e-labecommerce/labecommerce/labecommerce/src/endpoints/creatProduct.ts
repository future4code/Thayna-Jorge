import {Request, Response} from "express"
import dotenv from "dotenv"
import connection from "../connection"

dotenv.config()

export const creatProduct = async (req: Request, res:Response) => {
    
    try{
        const id = Date.now().toString()
        const {name, price, img_url} = req.body

        await connection.raw(`
            INSERT INTO  labecommerce_products VALUE(
                "${id}",
                "${name}",
                "${price}",
                "${img_url}"
            )
        `)
        
        res.status(200).send("Produto criado com sucesso !!")
        
    }
    catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    }
}