import axios from "axios"
import { baseURL } from "./baseURL"

//Exercício 1
// a) get

//b) Promise<any []>

//c)
async function main() {
    async function getSubscribers(): Promise<any[]> {
        const response = await axios.get(`${baseURL}/subscribers`)
        return response.data
    } 
    
}

main()