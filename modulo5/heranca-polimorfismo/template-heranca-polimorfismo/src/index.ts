// HERANÇA
//Exercício 1 
//a) Sim
//b) Uma vez
// class User {
//     private id: string;
//     private email: string;
//     private name: string;
//     private password: string;

//     //Exercício 5
//     public introduceYourself(): string {
//         return `Olá. sou ${this.name}. Boa noite`
//     }

//     constructor(
//           id: string,
//           email: string,
//           name: string,
//           password: string
//       ){
//           console.log("Chamando o construtor da classe User")
//           this.id = id
//           this.email = email
//           this.name = name 
//           this.password = password
//       }
  
//       public getId(): string {
//           return this.id
//       }
  
//       public getEmail(): string {
//           return this.email
//       }
  
//       public getName(): string {
//           return this.name
//       }
      
//       public gerPassword(): string {
//           return this.password
//       }
  
// }
//   const thay = new User ("1", "thay@lab.com", "thayna", "123") 
//   console.log(thay)
  

// //Exercício 2
// // a) Foi impressa 2 vezes
// // b) Porque ele acessou a classe User e depois a classe Customer na propriedade
// // creditCard retornando o valor q eu estipulei de "800"


// class Customer extends User {
//     public purchaseTotal: number = 6000;
//     private creditCard: string;
  
//     constructor(
//       id: string,
//       email: string,
//       name: string,
//       password: string,
//       creditCard: string
//     ) {
//       super(id, email, name, password);
//       console.log("Chamando o construtor da classe Customer");
//       this.creditCard = creditCard;
      
//     }
  
//     public getCreditCard(): string {
//       return this.creditCard;
//     }

//     public getPurchase(): number {
//         return this.purchaseTotal
//     }


// }

// //Exercício 3
// const thayCompras = new Customer ("2", "thay@saad.com", "thayna", "456", "800") 
//   console.log(thayCompras.getCreditCard())
//   console.log(thayCompras.getPurchase())


// //Exercício 4
// //Não ta fazendo sentido nenhum pra mim 
// const customer = new Customer("3", "lara@saad.com", "Lara", "200", "5000")
//   customer.introduceYourself()

interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
	// como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number
  // Retorna o valor da conta em reais
}

