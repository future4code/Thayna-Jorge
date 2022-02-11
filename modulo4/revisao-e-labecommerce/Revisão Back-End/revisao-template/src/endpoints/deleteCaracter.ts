import {Request, Response} from "express"
import conection from "../conection"

export const deleteCaracter = async (req: Request, res: Response):Promise<void> => {
    try {
        const { id } = req.params
        await conection("caracteristicas")
        .delete()
        .where({id})

        res.status(200).end()
    }
    catch (error) {
        res.status(500).send("Erro ao deletar, ainda ta lá")

    }


}