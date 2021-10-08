// Exercício de interpretação de codigo

// Exercício 1
// function minhaFuncao(variavel) {
// return variavel * 5}

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
/**a) Console vai exibir uma multiplicação entre 5*2 e 5*10 */
/** b) Não iria aparecer no console a operação*/ 

// Exercício 2
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) Essa função vai colocar a frase do usuário toda em minuscula e vai retornar verdadeiro ou falso pra palavra cenoura
//b) i -eu gosto de cenoura / true
// ii- cenoura é bom pra vista / true
// iii- cenouras crescem na terra / true


// Exercício de Escrita de Código

// 1
function minhaFrase (nome, idade, cidade, profic) {
    const frasefinal = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profic}.`
    return frasefinal
}
const chamadaFrase = minhaFrase("Thayna", 25, "Rio de Janiero", "Estudante")
console.log(chamadaFrase)

// 2 - a) Escreva uma função que receba 2 números como parâmetros
//e, dentro da função, faça a soma das duas entradas. Retorne o resultado.
// function numerosA (num1, num2) {
//     const soma = (num1 + num2)
//     return soma
// }
// const resultado = numeros (5,6)
// console.log(resultado)

//b) Faça uma função que recebe 2 números 
// function numerosB (num3, num4) {
//     const resultB = (num3 >= num4)
//     return resultB
// }

// const resultB = numerosB (5, 10)
// console.log(resultB)

//c) Escreva uma função que receba um número e 
//devolva um booleano indicando se ele é par ou não
//     function numerosC (num5,num6){
//         const resultC = (num5 % num6 === 0)   
//         return resultC
// }
// const resultC = numerosC (10, 2 )
// console.log(resultC)

//d) Faça uma função que recebe uma mensagem (string)
// const menUsu = prompt ("Diga uma palavra")

//     function mensagem 