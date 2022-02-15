import axios from 'axios'
import { Endereco } from "../types/EnderecoType";

const baseUrl = "https://viacep.com.br/ws"

export const getAddressInfo = async (cep: string): Promise<Endereco | null> => {

    try {
        const response = await axios.get(`${baseUrl}/${cep}/json/`)
    
        const address: Endereco = {
            estado: response.data.uf,
            cidade: response.data.localidade,
            bairro: response.data.bairro,
            logradouro: response.data.logradouro
        }

        return address

    } catch (error) {
        console.log("Erro no serviço getAddressInfo:", error)
        return null
    }
}