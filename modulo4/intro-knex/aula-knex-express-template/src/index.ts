import { Request, Response } from "express"
import connection from "./connection"
import app from "./app"
// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error: any) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
})

//a) Rertorna todos os dados do banco
//b) 
app.get("/actor/name/:name", async (req: Request, res: Response): Promise<void> => {
    try{
        const result = await connection.raw(`
        select * from actor 
            where name = "${req.params.name}";
        `)
        return result
        // res.status(200).send({message: result[0]})
    }
    catch (error : any){
        res.status(500).send(error.sqlMessage || error.message)
    }
})