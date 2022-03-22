import React, {useState} from "react"
import { ContainerPai, ContainerBusca } from "./styledBusca"

export const Busca = () => {

    const [busca, setBusca] = useState("")
    
    return(
        <ContainerPai>
            <ContainerBusca>
                <input 
                    type ="text" 
                    value = {busca}
                    onChange = {(ev) => setBusca(ev.target.value)}
                    placeholder = "Buscar"
                />
                    <ion-icon name="search-outline"></ion-icon>
            </ContainerBusca>
        </ContainerPai>
    )
}