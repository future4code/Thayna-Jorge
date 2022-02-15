//Exercício 1
//a) O constructor é uma função e dentro dele colocamos
//ações que queremos executar quando criarmos a classe

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
    //    console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
  

    public getCpf() :string {
        return this.cpf
    }

    public getName() :string {
        return this.name
    }
    
    public getAge() :number {
        return this.age
    }

    public getTransition():Transaction[] {
        return this.transactions
    }

    public setTransition(newTrasaction:Transaction) {
        this.transactions.push(newTrasaction)
    }
}

//b) 

const newUser = new UserAccount("111.111.111-11", "Jorge", 20)

// console.log(newUser)

//c) Por meio dos getters para pegar um atributo ou pelos
//setters para editar

//Exercício 2
class Transaction {
    private date: string;
    private value: number;
    private description: string;
  
  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }

  public getDate(){
      return this.date
  }

  public getValue(){
      return this.value
  }

  public getDescription(){
      return this.description
  }
}

const transaction1 = new Transaction ("14/02/2022", 3000, "Salario")
    
    
newUser.setTransition(transaction1)

console.log(newUser)




