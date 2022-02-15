import { Request, Response } from "express"
import { connection } from "../data/connection"

//Exercicio 2

export default async function selectUsersCres(req: Request, res: Response):Promise<any> {
   const retorno = req.query.name
   const result = await connection.raw(`
   SELECT * FROM aula48_exercicio
   WHERE name OR type LIKE "%${retorno}%"
   ORDER BY name ASC
   ;
   `)
   
   return result[0]
}

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const users = await selectUsersCres(req, res)

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

