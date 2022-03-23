import React from "react"
import { ContainerUserPai, ContainerUserInfo} from "./styledUsuario"
import foto from "../img/pessoa.jpg"

export const Usuario = (props) => {
    console.log(props.id);

    return(
        <ContainerUserPai>
            <ContainerUserInfo>
            <img src={foto}/>
            <h2>Nome</h2>
            <h3>{props.bio}</h3>
            <p>Front-end bla bla bla</p>
            </ContainerUserInfo>
        </ContainerUserPai>
    )
}