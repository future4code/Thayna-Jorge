// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//1. O que o código abaixo está fazendo?
// Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// R - Console.log vai imprimir 10, porque ele está
// somando uma vez a cada repetição.

 //=================================================

// 2. a) O que vai ser impresso no console?
// R-  Vai ser atribuido a variável numero os itens da lista
// que forem maior que 18

// b) - Não porque o for of só percorre a lista

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// ================================================

// 3. Qual seria o resultado impresso no console, 
//se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// R - O código fez com que o número digitado pelo usuário
// fosse equivalente a quantidade de linhas e a quantidade de asteristicos por linha
// então, digitando 4, ele exibiu 4 linhas e somou 1 até que a quanidade final fosse 4 também

// ===============================================

// Exercício de escrita de código
// 1 Pergunte ao usuário quantos bichinhos de estimação ele tem e 
// guarde esse dado em uma variável. 
// let qtdPet = Number (prompt("Quantos pets você tem?"))
// a) ) Se a quantidade for 0, imprima no console
// "Que pena! Você pode adotar um pet!"
// let lista = []
// if (qtdPet > 0){
//     let petContador = 0 
//     while (petContador < qtdPet){
//         const nomePet = prompt("Digite o nome deles um por um")
//         lista.push(nomePet)
//         petContador++
//     }    

// }else {
//     console.log("Que pena :C. Que tal adotar um Pet ? ;)")
// }

// console.log(lista)
// ============================================================

// 2
const arrayOriginal = [ 10, 66, 12, 30, 77, 23,99 ]
//a)
// para cada um dos itende de número do array original eu vou executar o que está dentro
// de  {}
// for (let numeros of arrayOriginal){
//     console.log(numeros)

// }
//b)
// for(let numeros of arrayOriginal){
//     const result = (numeros / 10)
//     console.log(result)

// }

//c)
let novoArray = []

for(let numeros of arrayOriginal){
    if (numeros % 2 === 0){
    novoArray.push(numeros)
    console.log(novoArray)
    }

}
