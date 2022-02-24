import {Request, Response} from "express"
import conection from "../conection"
import { caracter } from "../types"

export const getAllCaracters  =  async (req: Request, res: Response):Promise<void> => {
    try { 
        const name = req.query
        const caractere : caracter[] = await conection("caracteristicas")

        res.send(caractere)
    }
    catch (error:any) {
        res.status(500).send("Deu erro aqui com nóis !")
    }

    
}

//Aqui está as funções que vão fazer o endpoint funcionar
//Res - envia respostas
//Req - Recebe a resposta