import React, {useState} from "react"
import { ContainerPai, ContainerBusca, ContainerLogo, ContainerInput } from "./styledBusca"
import git from "../img/gitcerto.png"
// import {BASE_URL} from "../Hooks/url.js"
// import axios from "axios"


export const Busca = (props) => {

    // const [renderTela setRenderTela] = useState("usuario")

    // const getHistorico = () => {

    // }
    return(
        <ContainerPai>
            <ContainerBusca>
                <ContainerLogo>
                <img src={git} alt="github"/>
                </ContainerLogo>
                <ContainerInput>
                <input 
                    type ="text" 
                    value = {props.busca}
                    onChange = {props.buscUsuario}
                    placeholder = "Buscar Usuário"
                />
                    <ion-icon name="search-outline"
                        onClick = {props.getUser}
                    ></ion-icon>
                </ContainerInput>
                <p>Ver hitórico de Buscas</p>
            </ContainerBusca>
        </ContainerPai>
    )
    
}