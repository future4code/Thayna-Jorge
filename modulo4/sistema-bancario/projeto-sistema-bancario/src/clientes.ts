type Users = {
    nome:string,
    cpf:string,
    nascimento:string,
    extrato:number,
    transacoes: any []

}

export let clientes: Users [] = [
    {
       nome: "Claudia",
       cpf: "111.111.111-11",
       nascimento:"01/01/1991",
       extrato: 0,
       transacoes : []
    },

    {
        nome:"Milton",
        cpf:"222.222.222-22",
        nascimento:"02/02/1992",
        extrato: 0,
        transacoes : []
    },

    {
        nome:"Daniele",
        cpf:"333.333.333-33",
        nascimento:"03/03/1993",
        extrato: 0,
        transacoes : []
    }
]


