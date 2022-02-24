//Arquivo que contém os dados que vão conversar como banco de dados
import knex, {Knex} from "knex"


// Essa classe não vai ser instanciada, então não precisamos criar um constructor
export class ConnectionDatabase {
    /* sempre q eu quiser acessa um método dessa classe, 
    basta eu colocar o nome dela .metodo pq ela usa o static*/
    protected static connection: Knex = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    })
}