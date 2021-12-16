import React from "react"
import { ContainerPai, LogoImage } from "./StyledInscreverse"
import logo from "../../Imagens/logomarca.png"
import CadastroForm from "./CadastroForm"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"

const TelaInscreverse= ({setTrocaButton}) => {
    useUnprotectedPage()
    return (
        <ContainerPai>
            <LogoImage src={logo} />
            <CadastroForm setTrocaButton={setTrocaButton}/>
        </ContainerPai>
    )
}
export default TelaInscreverse