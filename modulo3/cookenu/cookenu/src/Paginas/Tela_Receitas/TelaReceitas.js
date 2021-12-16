import React from "react"
import useProtectPage from "../../Hooks/useProtectPage"

const TelaReceitas = () => {
    useProtectPage()
    return (
        <div>
            <h1>Lista de Receitas</h1>
       
        </div>
    )
}
export default TelaReceitas