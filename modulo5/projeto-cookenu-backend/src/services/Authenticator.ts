import * as jwt from "jsonwebtoken"

export interface AuthenticationData {
    id: string
}

export class Authenticator {
    generete(input: AuthenticationData): string{
        const token = jwt.sign(input, process.env.JWT_KEY, {
            expiresIn:process.env.EXPIRES_IN,
        })
        return token
    }

    getTokenData(token:string): AuthenticationData{
        const data = jwt.verify(token, process.env.JWT_KEY)
        return data as AuthenticationData
    }
}