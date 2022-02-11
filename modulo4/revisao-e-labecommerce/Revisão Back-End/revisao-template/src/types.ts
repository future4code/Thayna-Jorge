export type filme = {
    id: number
    titulo: string,
    ano: number
}

export enum GENERO {
    MACHO = "macho",
    FEMEA = "femea",
    OUTRO = "outro"
}

export type caracter = {
    id: number,
    nome: string,
    genero: GENERO,
    descricao?:string
}

//Aqui estão os meus types, ou seja, como cada dado, la da pastinha de dados deve
// se comportar. 