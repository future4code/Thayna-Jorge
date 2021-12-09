import React from "react"
import { useHistory } from "react-router"


export const ListTripPage = () => {
    const history = useHistory()

    const voltarParaHome = () => {
        history.goBack("/")
    }

    const irParaInscreverse = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <p>Lista de Viagens</p>
            <button onClick={voltarParaHome}>Voltar</button>
            <button onClick={irParaInscreverse}>Inscrever-se</button>
        </div>
    )
}