import axios from "axios"
import { baseURL } from "./baseURL"

type subscribers = {
  id: string,
  name: string,
  email: string
}

const getSubscribers = async (): Promise<user[]> => {
  const response = await axios.get(` ${baseURL}/subscribers`)
  return response.data
}


