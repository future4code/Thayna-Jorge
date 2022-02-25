import {Request, Response} from "express"
import { UserDatabse } from "../dados/UserDatabase"
import { User } from "../entidades/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import {IdGenerator} from "../services/IdGenerator"

export const createUser = async (req: Request, res:Response) => {
    try {
        const {nome, email, senha} = req.body

        if(!nome || !email || !senha) {
            res.status(422).send("Informe os campos de nome, email e senha")
        }
        

        const userDatabse = new UserDatabse()
        const user = await userDatabse.findUserByEmail(email)

        if(user){
            res.status(409).send("Usuário já tem cadastro")
        }

        const qtdCaracter = senha.length()
        if (qtdCaracter <= 6){
            res.status(406).send("Caracteres da senha ultrapassam 6")
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hashSenha =  await hashManager.hash(senha)

        const authenticator = new Authenticator()
        const token = authenticator.generete({id})

        const newUser = new User(id, nome, email, hashSenha)
        await userDatabse.newUser(newUser)
        
        console.log(newUser)

        res.status(200).send({message:"Usuário criado com sucesso ", token})

    } catch (error) {
        res.status(400).send("Ocorreu um erro")
    }
}