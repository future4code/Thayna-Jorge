import { useRequestData } from "../../Hooks/useRequestDada"
import { Header } from "../Header/Header"
import { ContainerFilter } from "./styled"

export const Filter = () => {
    

    return(
        <div>
            <Header/>
            <ContainerFilter>
                <p> Milhões de filmes, séries e pessoas<br/>
                para descobrir. Explore já
                </p>
                <p>FILTRE POR:</p>
            </ContainerFilter>
        </div>

    )
}