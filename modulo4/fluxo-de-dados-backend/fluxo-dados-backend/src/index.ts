import express, { Request, Response } from "express"
import cors from "cors"
import { products } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

//EXERCICIO 1
app.get('/test', (req: Request, res: Response) => {
  res.send("Exercício 1 funcionando !!")
})

//EXERCICIO 4
app.get('/products/all', (req:Request, res: Response) => {
  try { res.status(200).send(products)}
  catch (error: any) { res.status(500).send("Produtos não encontrados")}
})

//EXERCICIO 3
app.post('/products/add', (req: Request, res: Response) => {
  const productName = req.body.name
  const productId = (Date.now().toString())
  const prductPrice = Number (req.body.price) 
  
  products.push({
    id: productId,
    name: productName,
    price: prductPrice
  })
  res.status(201).send(products)
})


//EXERCICIO 5
app.put('/products/edit', (req:Request, res: Response) => {
  const id: number = req.body.id
  const newPrice: number = req.body.price

  if (!newPrice)
    {return res.status(300).send("Informe um preço")}
  if (newPrice <= -1)
    {return res.status(300).send("Informe um valor acima de 0")}
  if (newPrice === 0)
    {return res.status(300).send("Informe um valor maior que 0")}

    for( let i = 0; i < products.length; i ++)
      if(products[i].id === id) {
        products[i].price = newPrice
      }
})