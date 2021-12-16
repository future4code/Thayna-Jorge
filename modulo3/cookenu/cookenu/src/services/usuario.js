import axios from "axios"
import {BASE_URL} from "../constantes/urls"
import { goToReceitas } from "../rotas/coordenadas"

export const login = (body, clear, history, setTrocaButton) =>{
    axios.post(`${BASE_URL}/user/login`, body)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        clear()
        goToReceitas(history)
        setTrocaButton("Logout")
        
    })
    .catch((error) =>{
        alert(error.response.data.message)
    })
}

export const cadastro = (body, clear, history, setTrocaButton) => {
    axios.post(`${BASE_URL}/user/signup`, body)
    .then((response)=>{
        localStorage.getItem("token", response.data.token)
        clear()
        goToReceitas(history)
        setTrocaButton("Logout")
        alert("Usuario Criado com Sucesso, agora faça seu Login")
    })
    .catch((error) => {
        alert("Erro no Cadatro")
    })
}