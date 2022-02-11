import {Request, Response} from "express"
import conection from "../conection"


export const criaCaracters = async (req:Request, res:Response): Promise<void> => {
    try{
        const {nome, genero, descricao} = req.body
            console.log(req.headers["content-type"])
            res.status(201).end()

        await conection("caracteristicas")
        .insert({nome, genero, descricao})
    }
    
    catch{
        res.status(500).end()
    }
}