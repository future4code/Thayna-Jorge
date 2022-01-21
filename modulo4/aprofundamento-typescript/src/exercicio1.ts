9// a)Crie uma variável minhaString do tipo string e
//  atribua um valor a ela. Tente atribuir um número a esta variável.
//  O que acontece?

// const minhaString: string = 9

// R: O Typescript não permite que um número seja atribuído
// a um tipo string.

// b)Crie uma variável meuNumero do tipo number e atribua
// um valor numérico. Como fazer para que essa variável também 
//aceite strings? Ou seja, como criamos no typescript uma 
//variável que aceite mais de um tipo de valor?

// const meuNumero: number = 9

// R: Para uma variável receber um valor de numérico e 
// string, precisamos usar o type Aliases + Union type

// c)  Agora crie um novo objeto. Este objeto é uma pessoa,
 //e deve possuir três propriedades:

enum CoresArcoires {
    Cor1 = "Amarelo",
    Cor2 = "Azul",
    Cor3 = "Verde",
    Cor4 = "Roxo"
}

 
type pessoa = {
     nome: string,
     idade: number,
     corFavorita: string

}

const aluno : pessoa = {
    nome: "Thayna",
    idade: 25,
    corFavorita:CoresArcoires.Cor1
}



