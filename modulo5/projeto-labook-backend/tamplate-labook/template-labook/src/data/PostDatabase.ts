import { PostRepository } from "../business/PostRepository";
import BaseDatabase from "./BaseDatabase";
import Post  from "../model/Post";

export default class PostDatabase extends BaseDatabase implements PostRepository{
    protected TABLE_NAME = "labook_users"

    insert = async(post: Post) => {
        try {
            await BaseDatabase
            .connection(this.TABLE_NAME)
            .insert(post)

            return post
        }
        catch (error) {
            throw new Error ("Erro ao criar usuário")
        }
    }

    findById = async (id: string) => {
        try {
            const queryResult: Post[] = await BaseDatabase
            .connection(this.TABLE_NAME)
            .select()
            .where({id})

            return queryResult.length ? queryResult[0] : null
        } catch (error) {
            throw new Error ("Não foi possível realizar a busca pelo usário no banco de dados")
        }
    }
}