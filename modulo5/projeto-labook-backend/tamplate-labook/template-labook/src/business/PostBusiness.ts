import { database } from "firebase-admin"
import Post from "../model/Post"
import { HashManager } from "../services/HashManager"
import { IdGenerete } from "../services/IdGenerete"
import { TokenGenerete } from "../services/TokeGenerete"
import { PostRepository } from "./PostRepository"

export enum USER_TYPES {
    NORMAL = "NORMAL",
    ADMIN = "EVENT"
}

export type postInputDTO = {
    image: string,
    description: string,
    date: Date,
    type: USER_TYPES,
    authorId: string,
}

export default class PostBusiness {
    private postData :PostRepository
    private idGenerete : IdGenerete
    private hasMamager : HashManager
    private tokenGenerete : TokenGenerete

    constructor(postDataImplement : PostRepository){
        this.postData = postDataImplement
        this.idGenerete = new IdGenerete()
        this.hasMamager = new HashManager()
        this.tokenGenerete = new TokenGenerete()
    }

    creatPost = async (input : postInputDTO, token: string) => {
        const inputToken = token 

        const {image, description, date, type, authorId } : postInputDTO = input
        if (!image || !description || !date || !type || !authorId){
            throw new Error ("Preencha todos od campos")
        }

        const id = this.idGenerete.generateId()

        const registroPost = await this.postData.findById(id)
        if (registroPost) {
            throw new Error("Esse post já existe")
        }
        
        const verifyToken = this.tokenGenerete.getTokenData(inputToken)
        if (!verifyToken) {
            throw new Error("Token inexistente ou inválido.")
        }

        const post = new Post(
            id,
            image,
            description,
            date,
            type,
            authorId
        )
        await this.postData.insert(post)
        return [{
            "Post Criado" : post
        }]
    }
}