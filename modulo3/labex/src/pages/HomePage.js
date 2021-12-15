import React from "react"
import { useHistory } from "react-router"
import {ContainerGeral } from "../style/StyledGeral"

export const HomePage = () =>{
    const history = useHistory()

    const goToVerViagens = () => {
        history.push("/listaviagens")
    }
    
    const irParaAreaAdmin = () => {
        history.push("/login")
    }
    return(
        <ContainerGeral>
            <h1>Home Page</h1>
            <div>
            <button onClick={goToVerViagens}>Ver Viagens</button>
            <button onClick={irParaAreaAdmin}>Área de Admin</button>
            </div>
        </ContainerGeral>
    )
}