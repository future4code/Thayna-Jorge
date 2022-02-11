import {Request, Response} from "express"
import dotenv from "dotenv"
import connection from "../connection"

dotenv.config()

export const regisCompra = async (req: Request, res:Response) => {
    const id = Date.now().toString()
    const {user_id, product_id, quantity} = req.body
    try{
         
        const product_price = await connection.raw(`
        SELECT price FROM labecommerce_products
        WHERE id = ${product_id};
        `) 
        console.log(quantity, product_price [0] [0].price)
        let price = Number(quantity) * Number(product_price [0] [0].price)
        console.log(price)

        const result =  await connection.raw(`
        INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
        VALUE (
            "${id}"
           "${user_id}",
           "${product_id}",
           ${quantity},
           ${price}
        );
        `)
        
        res.status(200).send(result [0])
        
    }
    catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    }
}