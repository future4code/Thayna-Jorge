import React from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import useProtectPage from "../../Hooks/useProtectPage"
import useRequestData from "../../Hooks/useRequestData"
import { BASE_URL } from "../../constantes/urls"
import { TelaContainer, ContainerReceita, ImagemReceita } from "./StyledDetalhes"
import { Typography } from "@material-ui/core"

const TelaDetalhesReceitas = () => {
    useProtectPage()
    const params = useParams()
    const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
    console.log(recipe)

    return (
        <TelaContainer>
            {recipe &&
                <ContainerReceita>
                    <ImagemReceita src={recipe.image} />
                    <Typography guetterBottom align={"center"} variant={"h5"} color={"primary"}>{recipe.title}</Typography>
                    <Typography align={"center"}>{recipe.description}</Typography>
                </ContainerReceita>}
        </TelaContainer>
    )
}
export default TelaDetalhesReceitas