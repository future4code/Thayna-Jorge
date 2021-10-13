// Exercício de Interpretação de Código
//1 -  a) O código vai dizer se o resto da divisão do número digitado pelo usuário é igual a zero.
// Se sim, vai dar mensagem, passou no teste, se não, vai dar a mensagem, não passou no teste  

// b) qlq número que seja diferente de zero
// c) apenas para zero


// 2 -  a) Ele serve para deixar o código mais curso e em parâmetros de igualdade. 

// B)"O preço da fruta ", Maça, " é ", "R$ ", 2.25) 

// C) seria impresso no console.log
// "O preço da fruta ", Pera, " é ", "R$ ", 5.5)

//3 a) Está pedindo para o uduário digitar um número
// b) Se for digitado 10 vai dizer que passou no teste, se digital -10 vai apresentar um erro 
// porque não foi determinado um valor para caso o número seja negativo
// c)Sim, não houve uma condição caso número negativo

// Exercício de Escrita de Código
// 1 Faça um programa que pergunta ao usuário qual a i
//dade dele e imprima no console se ele/ela pode dirigir 
//(apenas maiores de idade).

// const idade = Number(prompt("Quantos anos você tem ?")).toLocaleLowerCase()
//     if(idade>=18) {
//         console.log ("Você pode Dirigir")
//     }else {
//         console.log("Você não pode dirigir")
//     }

// =========================================================//

//2  faça um programa que verifica 
//que turno do dia um aluno estuda. 
//Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// const turno = prompt(Number("Qual turno você estuda ? M para MATUTINO, V para VESPERTINO ou N para NOTURNO")).toUpperCase()
//     if(turno==="M"){
//         console.log("Bom dia !")
//     }else if(turno==="V"){
//         console.log("Boa Tarde !")
//     }else if(turno==="N"){
//         console.log("Boa Noite !")
//     }

// ======================================================//
//3 
// const turno = prompt("Qual turno você estuda ? M para MATUTINO, V para VESPERTINO ou N para NOTURNO").toUpperCase()
//     switch (turno){
//         case "M":
//             console.log("Bom dia!")
//             break
//         case "V":
//             console.log("Boa tarde !")
//             break
//         case "N":
//             console.log("Boa noite")
//             break  
//         default:
//             console.log ("Digite um turno válido")    

//     }

//======================================================//
// 4 pergunta ao usuário qual o gênero de filme que vão assistir 
//e outra pergunta sobre o preço do ingresso, 

// const assistirFilme = () => {
// const genero = prompt ("Qual genero de filme vamos assistir ?").toLowerCase()
//  const valorIng = Number(prompt ("Qual o valor do Ingresso ?"))
//  if(genero==="fantasia" && valorIng<="15"){
//  console.log("Bom filme")
// }else {
//  console.log("Escolha outro filme")
//  }

// }
   
  

//  assistirFilme()