import React from "react"
import { useHistory } from "react-router"
export const AdminHomePage = () =>{
    const history = useHistory()

    const voltarParaHome = () => {
        history.goBack("/")

    }    
    const criarViagem = () => {
        history.push("/admin/trips/create")
    }
   
    const logoutPage = () => {
        history.push("/login")
    }
    
    return (
        <div>
            <p>Painel Administrativo</p>
            <button onClick={voltarParaHome}>Voltar</button>
            <button onClick={criarViagem}>Criar Viagem</button>
            <button onClick={logoutPage}>Logout</button>
        </div>
    )
}