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

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

const novoArray = pets.map((item, index, array) => {
   return item.nome
})

console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",novoArray[2])
console.log("Você ganhou um cupom de desconto de 10% para tosar o/a",novoArray[4])