const listTarefas = ["andar", "comer", "beber", "dormir"]

listTarefas.push(process.argv[2])

console.log(`Minha lista de tarefas ${listTarefas}`)