import React from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"


export const CreateTripPage = () => {
    const history = useHistory()

    const voltarPainelAdmin= () => {
        history.goBack("paineladmin")
    }

    const irParaInscreverse = () => {
        history.push("/formularioinscricao")
    }



    return (
        <div>
            <p>Criar Viagem</p>
            <button onClick={voltarPainelAdmin}>Voltar</button>
            <button>Criar</button>
        </div>
    )
}