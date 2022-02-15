import express, { Request, response, Response } from 'express'
import cors from 'cors'
import { clientes } from './clientes'


const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

app.get("/clientes", (req: Request, res:Response) => {
  res.status(200).send(clientes)
})

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()


app.post("/clientes", (req: Request, res: Response) =>{
  let erro:number = (400)
    try  {
      const novoNome = req.body.nome
      const novoCpf = req.body.cpf
      const anoNasc = req.body.nascimento

      const metodSplit = anoNasc.split('/')
      const idadeAtual = anoAtual - metodSplit[2]

      clientes.map((cliente) => {
        if(cliente.cpf === novoCpf) {
          erro = 404
          throw new Error ("CPF Cadastrado")
        }
      })

      if(idadeAtual < 0) {
        erro = 422
        throw new Error (`Insira uma data inferior à ${metodSplit}`)
      }

      if (idadeAtual < 18) {
        erro = 422 
        throw new Error (`Lamento, você precisa ser maior de 18 anos. Infelizmente você ainda tem ${idadeAtual} anos.`)
      }

      clientes.push({
        nome:novoNome,
        cpf:novoCpf,
        nascimento: anoNasc,
        extrato: 0,
        transacoes: []
      })
      
      res.status(200).send(clientes)

    }
    catch (erro:any) {
      res.status(erro).send(erro.massage)
    }
  
})