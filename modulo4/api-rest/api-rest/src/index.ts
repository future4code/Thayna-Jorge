import express, { Request, Response } from 'express'
import cors from 'cors'
import { UserPreferences } from 'typescript'



const app = express()
app.use(express.json())
app.use(cors())

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})


// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})



//Exercício 2 
app.get("/users/:type", (req: Request, res: Response) => {
  const userType = req.params.type as string
  let response = users
  try {
    response = response.filter((user) => user.type.includes(userType.toUpperCase()))
    res.status(200).send(response)
  } catch(error :any){
    res.status(400).send({message:"Erro"})
  }
  
})


//Exercicio 3
app.get("/users", (req:Request, res:Response) => {
  let errorCod: number = 400
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name.toLowerCase() === name)

    if(!user) {
      errorCod = 404
      throw new Error ("Usuário não encontrado!")
    }
    res.status(200).send(user)
  } catch(error: any) { //b)
      res.status(errorCod).send({message: error.message})
  }
})
//R: a) Query |


//Exercício 1
app.get("/users", (req:Request, res: Response) => {
  try {res.status(200).send(users)}
  catch (error:any) {res.status(500).send("Usuários não encontrados")}
})
//R: a) - Get | b) indicaria como users, pra deixar claro que é com esses dados 
//que estou trabalhando.

app.put("/user/add", (req:Request, res:Response) => {
  const id = (Date.now())
  const name = req.body.name
  const email= req.body.email
  const type = req.body.type
  const age = Number(req.body.age)

  users.push({
    id:id,
    name:name,
    email:email,
    type:type,
    age:age
  })
  res.status(201).send(users)
})

//R: a) Não funciona | b) não pq o put é para edição e não criação 