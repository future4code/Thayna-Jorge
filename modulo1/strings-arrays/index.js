/** EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO */

//  1 -Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
// let array
// console.log('a. ', array)
//R: Acredito que vá retornar undefined porque não foi atribuido nnenhum valor a array

//array = null
//console.log('b. ', array)
//R: Vai retornar o valor NULL

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)
// R: Comando array.length vai mostrar a quantidade de itens da lista

// let i = 0
// console.log('d. ', array[i])
//R: Console retorna undefined

//array[i+1] = 19
//console.log('e. ', array)
//R : Console retorna um erro poruqe não foi definido o valor de i

// const valor = array[i+6]
// console.log('f. ', valor)
//R: Console retornou undefined

// 2- Qual será o valor impresso no console se a entrada do usuário for.
    //const frase = prompt("Digite uma frase")
    //console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
    //R: Todas as letras vão ser maiúsculas, onde tem letra A, vai ser substituódo pela letra I e vai aparecer que a frase tem 25 letras


    // ==========================================================


/** EXERCÍCIOS DE ESCRITA DE CÓDIGO */    
// 1 Pergunte o nome e o email
    // const nomeDoUsu = prompt ("Qual seu nome?")
    // const emailDoUso  = prompt (nomeDoUsu, "Digite seu e-mail")
// 1.1 - Imprima no console a mensagem 
// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
    // console.log(` O email do Usuário é ${emailDoUso} e seu nom é ${nomeDoUsu}`)

// 2 - Faça um programa que contenha um array com 5 das suas comidas preferidas.
    const listaComid = ["sashimi", "queijos", "churrasco", "kiwi", "morango"]
//a) - imprima no console o array completo 
    console.log(listaComid)

//b)Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
//seguida por cada uma das comidas, uma embaixo da outra.
    console.log("Essas são minhas comidas preferidas")
    console.log(listaComid [0])
    console.log(listaComid [1])
    console.log(listaComid [2])
    console.log(listaComid [3])
    console.log(listaComid [4])

//c) pergunte ao usuário uma comida preferida. 
    const comidaUsu = prompt ("Qual sua comida favorita ?")
// Troque a segunda comida da sua lista pela inserida pelo usuário.
// Imprima no console a nova lista


// 3 - a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas]
//     const listadeTarefas = []
// //b) Pergunte ao usuário 3 tarefas que ele 
// //precise realizar no dia e armazene-as, uma por uma, no array
//     const tarefas = prompt ("Diga 3 arefas para hoje")
//     console.log(tarefas)
   

        