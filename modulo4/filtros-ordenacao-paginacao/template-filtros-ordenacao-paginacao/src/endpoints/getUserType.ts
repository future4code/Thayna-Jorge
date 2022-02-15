import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 1 B

export default async function selectUsersType(req: Request, res: Response):Promise<any> {
   const retorno = req.params.type
   const result = await connection.raw(`
      SELECT name, type
      FROM aula48_exercicio
      WHERE type LIKE "%${retorno}%";
   `)
   
   return result[0]
}

export const getUserType = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectUsersType(req, res)

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


