// Exercício de interpretação de Código
// 1 - a) O que vai ser impresso no console?
// const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
  
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })
// R : Vai ser exibido no console o nome dos usuários,
// a posição deles no array e o array

// 2- a) O que vai ser impresso no console?
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
//R : Foi impresso no console um array com os nomes da 
//posição item

// 3 - a) a) O que vai ser impresso no console?
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
  //R : Console retornou o que era diferente de Chijo

// =============================

// Exercício de escrita de código

// 1 a)a) Crie um novo array que contenha 
// apenas o nome dos doguinhos

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const novoArray = pets.map((item, index, array) => {
//    return item.nome
// })

// console.log(novoArray)

// b) Crie um novo array apenas com os cachorros 
//salsicha

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const novoArray = pets.filter((item, index, array) => {
//    return item.raca === "Salsicha"
// })

// console.log(novoArray)

//c) c) Crie um novo array que possuirá
//  mensagens para enviar para todos os
//   clientes que são poodles. 
//   A mensagem deve ser: "Você ganhou um cupom de desconto de 
//   10% para tosar o/a [NOME]!"

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]

// const novoArray = pets.map((item, index, array) => {
//    return item.nome
// })

// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",novoArray[2])
// console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",novoArray[4])

// 2 - EXERCÍCIO
const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]



//a) Crie um novo array que contenha 
// apenas o nome de cada item

// const novoArray = produtos.map((item) => {
   //    return item.nome
   // })
   //    console.log(novoArray)
   

// ===================================================

// b)Crie um novo array que contenha um 
//objeto com o nome e o preço de cada item, 
//aplicando 5% de desconto em todos eles

// const novoArray = produtos.map ((item, index, array)=>{
//    return (item.nome, item.preco*0.05).toFixed(2)

// })
// console.log(novoArray)

// =======================================================

 // c) Crie um novo array que contenha apenas
 // os objetos da categoria Bebidas

//  const novoArray = produtos.filter((item, index, array) =>{
//    return (item.categoria === "Bebidas")

//  })
//  console.log(novoArray)

// =======================================================

//d) Crie um novo array que contenha apenas os 
// objetos cujo nome contenha a palavra "Ypê"

//**// const novoArray = produtos.filter((item,index,array) => {
//    return (item.nome === "Ypê")
// })

// console.log(novoArray)

