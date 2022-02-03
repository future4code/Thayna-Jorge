import React from "react"
import useProtectPage from "../../Hooks/useProtectPage"
import CardReceita from "../../components/CardReceita/CardReceita"
import useRequestData from "../../Hooks/useRequestData"
import {BASE_URL} from "../../constantes/urls"
import { CardTelaReceita, AddReceitaButton } from "./StyledReceitas"
import { Add } from "@material-ui/icons"
import { useHistory } from "react-router-dom"
import {goToAdcReceitas, goToDetalhes} from "../../rotas/coordenadas"


const TelaReceitas = () => {
    useProtectPage()
    const history = useHistory()
    const receitas = useRequestData([], `${BASE_URL}/recipe/feed`)
    
    const onClickCard =(id) => {
        goToDetalhes(history, id)
    }

    const arrayReceitas = receitas.map((recipe) => {
        return(
            <CardReceita
            text={recipe.title}
            image={recipe.image}
            onClick={() => onClickCard(recipe.recipe_id)}
            >
            
           </CardReceita>
        )
       
    })
    
    return (
        <CardTelaReceita>
            {arrayReceitas}
            <AddReceitaButton
                color={"primary"}
                onClick={() => goToAdcReceitas(history)}
            >
                <Add/>
            </AddReceitaButton>
        </CardTelaReceita>
    )
}
export default TelaReceitas