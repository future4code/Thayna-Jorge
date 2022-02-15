import express, {Express, Request, Response} from "express"
import cors from "cors"
import knex from "knex"
import dotenv from "dotenv"
import { AddressInfo } from "net";
import { connection } from "./connection";

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
})

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
})


app.get("/user/:id" , async (req: Request, res: Response)=> {
    let errorCode = 400
    try{
        const id = req.params.id
        if ( !id ){
            errorCode = 404
            throw new Error ("Verifique se o ID está correto")
        }
        const result = await connection.raw(`
        SELECT id, nickname FROM TodoListUser 
        WHERE id = "bla";
        `)
        res.status(201).send(result [0])
    }

    catch(error:any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    }
})


app.post("/user", async (req: Request, res: Response)=>{
    let errorCode = 400
    try{
        const id = Date.now().toString()
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if(name && nickname && email === true){
            errorCode = 422
            throw new Error ("Verifique se Nome, Nicname e Email, estão corretos")
        }
        await connection.raw(` 
        INSERT INTO TodoListUser (id, name, nickname, email) 
        VALUES (
            "${id}",
            "${name}",
            "${nickname}",
            "${email}"
            );
        `)
        res.status(200).send("Usuário Criado")
    }
    catch (error:any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    }  
})


app.put("/user/edit/:id", async (res:Response, req: Request) => {
    let errorCode = 400
    try {
        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        if(!id){
            throw new Error("Informe o Parametro do ID")
        }
        if (!name || !nickname){
            throw new Error("Informe Nome e NickName")
        }

        const result = await connection.raw(`
        UPDATE TodoListUser set name = "Teste", nickname ="Testezinho" 
            WHERE id = "ts";
        `)
        res.status(200).send(result [0])
    }
    catch  (error:any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    }
})



app.post("/task", async (req: Request, res: Response)=>{
    let errorCode = 400
    try{
        const id = Date.now().toString()
        const title = req.body.title
        const description = req.body.description
        let limit_date = req.body.limit_date
        const creator_user_id = req.body.creator_user_id

        limit_date = limit_date.split('/').reverse().join('-')


        if(title && description && limit_date && creator_user_id  === true){
            errorCode = 422
            throw new Error ("Verifique se Nome, Nicname e Email, estão corretos")
        }
        await connection.raw(` 
        INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id) 
        VALUES (
            "${id}",
            "${title}",
            "${description}",
            "${limit_date}",
            "${creator_user_id}"
            );
        `)
        res.status(201).send("Tarefa Criada")
    }
    catch (error:any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    }  
})


app.get("/task/:id" , async (req: Request, res: Response)=> {
    let errorCode = 400
    try{
        const id = req.params.id
        if ( !id ){
            errorCode = 404
            throw new Error ("Verifique se o ID está correto")
        }
        const result = await connection.raw(`
        SELECT * FROM TodoListTask
        WHERE id = "${id}";
        `)
        res.status(201).send(result [0])
    }

    catch(error:any) {
        res.status(errorCode).send({
            message: error.sqlMessage || error.message
        })
    }
})
