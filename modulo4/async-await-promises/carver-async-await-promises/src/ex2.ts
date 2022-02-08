import axios from "axios"
import { baseURL } from "./baseURL"

// Exercício 2 
//a) Nomeada - indica logo no ínicio que a função é assincrona
//b) 
const getSubscribers = async (): Promise<any[]> => {
  const response = await axios.get(` ${baseURL}/subscribers`)
  return response.data
}

getSubscribers()