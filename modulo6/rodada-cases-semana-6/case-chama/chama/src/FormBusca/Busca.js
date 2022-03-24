import React, {useState} from "react"
import { ContainerPai, ContainerBusca, ContainerLogo, ContainerInput } from "./styledBusca"
import git from "../img/gitcerto.png"
// import {BASE_URL} from "../Hooks/url.js"
// import axios from "axios"


export const Busca = (props) => {

    // const [ busca, setBusca] = useState ()

    // const [ usuarios, setUsuarios] = useState ([])

    // const buscUsuario = (ev) => {
    //     setBusca(ev.target.value)
    // }
      
    // const getUser = () => {
    //     axios.get(`${BASE_URL}/users/${busca}`)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
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
            </ContainerBusca>
        </ContainerPai>
    )
    
}