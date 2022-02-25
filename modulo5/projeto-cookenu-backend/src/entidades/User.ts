export class User {
    constructor(
        private id: string,
        private nome: string,
        private email:string,
        private senha: string
    ) {}

    public getId(){
        return this.id
    }

   public getNome() {
       return this.nome
   }

   public getEmail(){
       return this.email
   }

   public getSenha() {
       return this.senha
   }

   

   static toUserModel (data: any): User {
    return new User (data.id, data.nome, data.email, data.senha)
}
}