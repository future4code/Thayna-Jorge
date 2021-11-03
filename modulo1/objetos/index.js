/**  Exercício de interpretação de Código */
//a) O que vai ser impresso no console?
// PRIMEIRO console.log vai imprimir o primeiro item do array "Matheus Naschtergaele"
// SEGUNDO console.log vai imprimir o ultimo item do array "Virginia Cavendish"
// TERCEIRO console.log vai imprimir Canal: Globo etc,

/** 2 - a) O que vai ser impresso no console?*/
// console.log(cachorro) -  imprime os componentes do objeto cachorro
// console.log(gato) - imprime os componentes do objeto cachorro mudando o nome para Juba
// console.log(tartaruga) - impreme os componentes do objeto gato,trocando a letra A pela O no nome,
// fincando Jubo.

// b) ele troca por outra item ou adiciona

/** 3 - a) O que vai ser impresso no console? */
// console.log(minhaFuncao(pessoa, "backender")) - Vai retornar false, por que "backender" está definido para 
// retornar false. 
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// Sim, o primeiro console.log está pedindo que dentro da função pessoa, seja selecionado o resultado de Backender
// E no segundo console.log retornou undefined porque não existe o paramêtro "altura", então o programa está dizendo que 
// não existe definição pra essa variável.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//1 - Crie um objeto. Ele deve conter duas propriedades: 
//nome (string) e apelidos (um array que sempre terá exatamente três apelidos).

// const pessoa = {
//     nome: "Thayna",
//     apelidos: [ "Thay", "Tata", "Saad"]
// }

//Depois, escreva uma função que recebe como entrada um objeto e retorne a 
// //a frase "Eu sou ${nome}" 
// function nomeApelido(pessoa){
//     const frase = `Eu sou ${pessoa.nome}, e meus apelidos são ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou ${pessoa.apelidos[2]} `
//     return frase
// }
// // Imprime uma mensagem no modelo abaixo:
    

// //b) Agora, usando o operador spread,crie um novo objeto mantendo o valor da propriedade nome,
// // mas com uma nova lista de três apelidos.

// const pessoaNova = {
//     ...pessoa,
//     apelidos: [ "branquela", "amor", "Isquerdinha"]
// }
// console.log(nomeApelido(pessoa))
// console.log(nomeApelido(pessoaNova))

/** 2- a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.*/

// const pessoa1 = {
//     nome: "Thayna",
//     idade : "25",
//     profissao : "estudante"

// }

// const pessoa2 = {
//     nome : "Gabriel",
//     idade : "28",
//     profissao : "Estudate"
// }

// /** b) Escreva uma função  */
// function pessoaVez (pessoa) {
// const resultado = [`${pessoa.nome}, ${pessoa.nome.length}, ${pessoa.idade}, ${pessoa.profissao}, ${pessoa.profissao.length}`]
// return  resultado
// }

// console.log(pessoaVez(pessoa1))
// console.log(pessoaVez(pessoa2))


/** Ezercício 3 */
//a) Crie uma variável de escopo global
// que guarde um array vazio chamada carrinho
carrinho = []

//b) Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (string)
 //e disponibilidade (boolean - devem começar como true)
const fruta1 = {
    nome : "morango",
    disponivel : true
}
const fruta2 = {
    nome : "acerola",
    disponivel : false
}
const furta3 = {
    nome : "kiwi",
    disponivel : true
}

 // c) Crie uma função que receba um objeto fruta por parâmetro
// e coloque-a dentro do array de carrinho.
// Invoque essa função passando os três objetos criados. */
function porNoCarrinho(fruta) {
    carrinho.push(fruta)
    return carrinho
}
// d) Imprima a variável carrinho e garanta que ela agora seja 
// um array preenchido com três objetos.
porNoCarrinho(fruta1)
porNoCarrinho(fruta2)
porNoCarrinho(furta3)
console.log(carrinho)
