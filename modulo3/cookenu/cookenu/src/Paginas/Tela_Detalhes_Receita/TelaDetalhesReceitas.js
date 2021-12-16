import React from "react"
import useProtectPage from "../../Hooks/useProtectPage"


const TelaDetalhesReceitas = () => {
    useProtectPage()
    return (
        <div>
            <h1>Detalhes da Receita</h1>
        </div>
    )
}
export default TelaDetalhesReceitas