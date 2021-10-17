// Exercícios de Interpretação de Código
// 1 a) O que vai ser impresso no console?

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
// R : Console vai retornar a multiplicação de 2*5 e 10*5
// como resultado 10 e 50

// b) O que aconteceria se retirasse os dois console.log e 
//simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? 
//O que apareceria no console?
//R : Se retirar o console.log não vai aparecer nada na tela do uduário

// 2 a) Explique o que essa função faz e qual é sua utilidade.
// R: O prompt vai pedir pro usuário digitar uma frase e a função vai 
// retornar um texto em minusculo + a palavra cenoura dentro da frase digitada
// pelo ususário. E a const repsota vai chamar a função com as definições acima pra ela
// exibir o texto do usuário com as novas configurações.

// b)Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura - R : eu gosto de cenoura
//ii.  CENOURA é bom pra vista - R: cenoura é bom pra vista
//iii. Cenouras crescem na terra - R: cenouras crescem na terra

// ==========================================================

// Exercícios de escrita de Código

// 1 a)  A função não deve receber nenhum parâmetro e deve
// imprimir uma mensagem falando algumas informações sobre você,
// como: 
// function sobreMim(){
//     console.log("Meu nome é Thayna, tenho 25 anos, moro no Rio de Janeiro e sou estudanter")
// }

// b)Agora escreva uma função que receba 4 parâmetros que 
//correspondem às informações de uma pessoa: o nome (string), 
//a idade (number), a cidade (string) e uma profissão (string).
// Ela deve retornar uma string que unifique todas as informações 
//da pessoa em uma só mensagem com o template:
// function sobreMim (){
//     const dados = {
//         nome: "Thayna",
//         idade : "25",
//         estado : "Rio de Janeiro",
//         profissao : "Estudante"
//     } 
//     return (`Eu sou ${dados.nome}, tenho ${dados.idade}, moro no ${dados.estado} e sou ${dados.profissao}`)
// }      

// console.log(sobreMim())

// 2 - a)Escreva uma função que receba 2 números como parâmetros, e, 
//dentro da função, faça a soma das duas entradas e retorne o resultado. 
//Invoque a função e imprima no console o resultado.

// function calculo(num1, num2){
//     const soma = num1 + num2
//     return soma
// }
// console.log(calculo(5,10))

//b)Faça uma função que recebe 2 números e retorne um booleano
// que informa se o primeiro número é maior ou igual ao segundo.

// function numBool (num1, num2){
//     const numIg = num1 >= num2
//     return numIg
// }
// console.log(numBool(5,10))

//c) Escreva uma função que receba um número e devolva um
// booleano indicando se ele é par ou não
// function numPar (num1){
//     const indiPar = (num1 % 2 === 0)
//     return indiPar
// }
// console.log(numPar(5))

//d) Faça uma função que recebe uma mensagem (string) como 
//parâmetro e imprima o tamanho dessa mensagem, juntamente 
//com uma versão dela em letras maiúsculas.
function mensagemStri (){
   return (length("Labenu")) 
}
console.log(mensagemStri())