import { Request, Response } from "express";
import connection from "conneection"
import { createUserData } from "../createUserData";
import { generateId } from "../services";
import { generateToken } from "../generationToken";

export const createUser = async (req:Request, res:Response): Promise<void>=> {
   try{
      const {email, password} = req.body

      if(!email || !password) {
         throw new Error(" Email inválido")
      }
      
      const id = generateId()
      await createUserData(id, email, password)
      const token = generateToken({id})

   }
  
}
      
