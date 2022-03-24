import styled from "styled-components"
import gif from "../img/gif.gif"

export const ContainerUserPai = styled.div `
    display:flex;
    justify-content: center ;
    flex-direction:column ;
    align-items:center ;
    width: 100% ;
    background-image:url(${gif}) ;
    background-repeat:no-repeat ;
    background-size: 100%;
    
`
export const ContainerUserInfo= styled.image `
    display:flex;
    justify-content: space-around ;
    flex-direction:column ;
    align-items:center ;
    border: 1px solid black;
    width: 600px ;
    height: 800px;
    margin-top:50px ;
    border-radius:150px ;
    background-color: rgba(255,255,255,255) ;

    img{
        border-radius: 50% ;
        border: 1px solid black;
        width:300px ;
        height:300px ;
    
    }
    
`

