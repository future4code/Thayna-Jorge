import * as bcrypt from "bcrypt"

export class HashManager {
    async hash(text:string): Promise <string>{
        const cost = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(cost)
        return bcrypt.hash(text, salt)
    }

    async compare(text: string, hash: string): Promise <boolean> {
        return bcrypt.compare(text, hash)
    }
}