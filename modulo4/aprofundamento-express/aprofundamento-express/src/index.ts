import express, {Request, Response} from "express"
import { title } from "process"

const app = express()

app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/ping", (req:Request, res:Response) => {          
  res.send("Pong! 🏓")
})

type Afaseres = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const tarefas: Afaseres[] = [
  {
    userId: 1,
    id: 11,
    title: "lavar",
    completed: true
  },

  {
    userId: 2,
    id: 12,
    title: "passar",
    completed: false
  },

  {
    userId: 3,
    id: 13,
    title: "cozinhar",
    completed: false
  },

  {
    userId: 4,
    id: 14,
    title: "varrer",
    completed: true
  }
]

app.get("/tarefas", (req: Request, res: Response) => {          
  res.send(tarefas)
})

app.post("/criar", (req: Request, res: Response) => {
  const novaTarefa = req.body.title
  const novaTarefaId = Number (req.headers.authorization)
  const novoId: number = 15
  
  tarefas.push({
    userId: novaTarefaId,
    id: novoId,
    title: novaTarefa,
    completed: false
  })

  res.send(tarefas)
})

app.put("/edita/:id/status", (req:Request, res: Response)=> {
  const statusTarefa = Number (req.params.id)
    for ( let i=0; i < tarefas.length; i ++){
      if(tarefas[i].id === statusTarefa) {
        tarefas[i].completed =! tarefas[i].completed

      }

      res.status(200).send(tarefas)
    }
})