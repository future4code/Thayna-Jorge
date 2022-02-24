import {Request, Response} from "express"
import dotenv from "dotenv"
import connection from "../connection"

dotenv.config()

export const getUsers = async (req: Request, res:Response) => {
    try{
        const result =  await connection.raw(`
            SELECT * FROM labecommerce_users
        `)
        
        res.status(200).send(result [0])
        
    }
    catch (error: any){
        res.status(500).send(error.message || error.sqlMessage)
    }
}