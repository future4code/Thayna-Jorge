import { stringify } from "uuid";
import { User } from "../entidades/User";
import { ConnectionDatabase } from "./ConnectionDatabase";

export class UserDatabse extends ConnectionDatabase{
    async newUser (user:User){
        try {
            await ConnectionDatabase.connection("user_cookenu")
            .insert({
                id: user.getId(),
                nome: user.getNome(),
                email: user.getEmail(),
                senha: user.getSenha()
    
            })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async findUserByEmail(email: string): Promise<User>{
        try {
            const user = await ConnectionDatabase.connection("user_cookenu")
            .select("*")
            .where({ email })

            return user[0] && User.toUserModel(user[0])
            
        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
    
}   
    