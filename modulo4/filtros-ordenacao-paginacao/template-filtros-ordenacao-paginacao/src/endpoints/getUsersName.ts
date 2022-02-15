import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 1 A

export default async function selectAllUsers(req: Request, res: Response):Promise<any> {
   const retorno = req.query.name
   const result = await connection.raw(`
      SELECT name 
      FROM aula48_exercicio
      WHERE name LIKE "%${retorno}%";
   `)
   
   return result[0]
}

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectAllUsers(req, res)

      if(!users.length){
         res.statusCode = 404
         throw new Error("Usuário não encontrado")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

