import React, { useEffect, useState } from "react"

import { ContainerUserPai, ContainerUserInfo} from "./styledUsuario"
export const Usuario = (props) => {
    
    const [user, setUser] = useState()
   
    useEffect(() => {
        setUser(props.usuarios)
    }, [props.usuarios])

    return(
        <ContainerUserPai>
            {user ? 
            <ContainerUserInfo>
            <img src={user.avatar_url}/>
            <h1>{user.name}</h1>
            <h2>Bio:{user.bio}</h2>
            <p>E-mail:{user.email}</p>
            <p>{user.blog}</p>
            </ContainerUserInfo>
            : <p>Usuario não encontrado</p>}
        </ContainerUserPai>
    )
}