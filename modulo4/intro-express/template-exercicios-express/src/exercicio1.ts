import express from "express";

import { AddressInfo } from "net"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})

app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type User = {
  id: number,
  name:string,
  phone:string,
  email:string, 
  website:string

}

const user1: User = {
  id: 1,
  name: "Thayna",
  phone: "21-99999-9999",
  email: "thay@labenu.com",
  website: "www.thay.com.br"
}

const user2: User = {
  id: 2,
  name: "Gabriel",
  phone: "21-91111-1111",
  email: "gab@labenu.com",
  website: "www.gab.com.br"
}

const user3: User = {
  id: 3,
  name: "Yanikisia",
  phone: "21-98888-8888",
  email: "yani@labenu.com",
  website: "www.yani.com.br"
}

const user4: User = {
  id: 4,
  name: "Bruno",
  phone: "21-94444-4444",
  email: "bru@labenu.com",
  website: "www.bru.com.br"
}

const usuarios = [user1, user2, user3,user4]

app.get("/users", (req, res) => {          
  res.send(usuarios)
})

type Post = {
  id: number,
  title:string,
  body:string,
  userId:number
}


const post1: Post = {
  id: 1,
  title: "Roda gigante em londres",
  body: "Roda gigante amarela e vermelha, que roda para tras",
  userId:111
}

const post2: Post = {
  id: 2,
  title: "Montanha Russa em Moscou",
  body: "Montanha Russa em formato de dragão",
  userId:222
}
const post3: Post = {
  id: 3,
  title: "Cabum em cancum",
  body: "Cabum que bate na horizontal",
  userId:333
}

const post4: Post = {
  id: 4,
  title: "Samba em Alabama",
  body: "Samba que pendura de ponta cabeça",
  userId:444
}

//Exercicio 6 - R: Acho melhor criar fora do array de usuários porque 
// preciso somente buscar pelo userID de cada usuário.

const postsUsers = [post1, post2, post3, post4]

app.get("/posts", (req, res) => {          
  res.send(postsUsers)
})

const users : User [] = []
const posts: Post [] = []


app.get("/posts/:id", (req, resp) => {
  const meusPosts = postsUsers.filter((post)=>{
      if(post.userId === 444) {
        return post
      }
  }) 
      resp.send(meusPosts)
})
