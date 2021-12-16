import React from "react"
import useProtectPage from "../../Hooks/useProtectPage"

const TelaAdcReceitas = () => {
    useProtectPage()
    return (
        <div>
            <h1>Adicionar Receitas</h1>
        </div>
    )
}
export default TelaAdcReceitas