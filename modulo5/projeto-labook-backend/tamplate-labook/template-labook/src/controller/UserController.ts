import { Request, Response } from "express";
import { UserMetadata } from "firebase-admin/lib/auth/user-record";
import { SignupInputDTO, UserBusiness } from "../business/UserBusiness";
import UserDatabase from "../data/UserDatabase";


export class UserController{
    private useBusiness : UserBusiness
    constructor ( ){
        this.useBusiness = new UserBusiness(new UserDatabase())
    }
    signup = async (req: Request, res:Response) => {
        const {name, email, password} = req.body

        const input : SignupInputDTO = {
            name, email, password
        }
        try {
            const token = await this.useBusiness.signup(input)
            res.status(200).send({message: "Usuário cadastrado com sucesso", token})
            
        } 
        catch (error:any) {
            if (error.message) 
            return res.status(400).send(error.message)
        }
    }

    login = async(req:Request, res:Response) => {
        try {
            
        } 
        catch (error:any) {
            
        }
    }
}