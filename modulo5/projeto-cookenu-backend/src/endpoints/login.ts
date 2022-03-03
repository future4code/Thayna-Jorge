import {Request, Response} from "express"
import { UserDatabse } from "../dados/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export const login = async (req: Request, res:Response) => {
    try {
        const {email, senha} =  req.body

        if(!email || !senha ){
        res.status(422).send("Preencha todos os campos corretamente")
        }
        const cadastroExistente = new UserDatabse()
        const user = await cadastroExistente.findUserByEmail(email)
        console.log(user)
        
        if (!user) {
            res.status(409).send("Usuário não cadastrado")
        }

        const hashManager = new HashManager()
        const senhaCorreta = hashManager.compare(senha, user.getSenha())

        if(!senhaCorreta){
            res.status(401).send("Email ou senha inválidos")
        }

        const authentication = new Authenticator()
        const token = authentication.generete({id: user.getId()})

        res.status(200).send({message: "Usuário logado"})

    } catch (error) {
        res.status(400).send(error.message)
    }
}