import User from "../model/User"
import { HashManager } from "../services/HashManager"
import { IdGenerete } from "../services/IdGenerete"
import { TokenGenerete } from "../services/TokeGenerete"
import { UserRepository } from "./UseRepository"


export type SignupInputDTO = {
    name: string,
    email: string,
    password: string
}



export class UserBusiness {
    private userData: UserRepository
    private idGenerate: IdGenerete
    private hashManager:HashManager
    private tokenGenerete: TokenGenerete

    constructor(userInterface: UserRepository){
        this.userData = userInterface
        this.idGenerate = new IdGenerete()
        this.hashManager = new HashManager()
        this.tokenGenerete = new TokenGenerete()

    }

    signup = async (input: SignupInputDTO) => {
        const {name, email, password} = input 
        if( !name || !email || !password) {
            throw new Error("Preencha os campos noma, email e senha corretamente")
        }

        const registraUser = await this.userData.findByEmail(email)
        if(registraUser) {
            throw new Error ("Email já cadastrado")
        }

        const id = this.idGenerate.generateId()

        const hashPassword = await this.hashManager.hash(password)
        

        const user = new User(
            id,
            name,
            email,
            hashPassword
        )

        console.log(user)
        await this.userData.insert(user)
        const token = this.tokenGenerete.generateToken({id})

        return token
    }
}