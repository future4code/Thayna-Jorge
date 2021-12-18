import React from "react"
import useProtectPage from "../../Hooks/useProtectPage"
import { ContainerPai } from "../Tela_Increver-se/StyledInscreverse"
import Typography from "@material-ui/core/Typography"
import AdcReceitaForm from "./AdcReceitaForm"


const TelaAdcReceitas = () => {
    useProtectPage()
    return (
        <ContainerPai>
            <Typography gutterBottom variant={"h4"} algin={"center"} color={"primaryColor"}>Adicionar Receita</Typography>
            <AdcReceitaForm/>
        </ContainerPai>
    )
}
export default TelaAdcReceitas