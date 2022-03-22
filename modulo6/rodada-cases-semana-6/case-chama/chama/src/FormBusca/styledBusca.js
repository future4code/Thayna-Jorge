import styled from "styled-components"
import fundobusca from "../img/degrade.jpg"

export const ContainerPai = styled.div `
    background-color: #c5daff;
    width:100% ;
    height:100vh;
    border: 1px solid black;
    display:flex ;
    justify-content:center ;
    margin:auto ;
`

export const ContainerBusca = styled.div `
    background-image: url(${fundobusca}) ;
    background-repeat: no-repeat;
    background-size: 100%;
    height:500px ;
    width: 100% ;
    border: 1px solid black;
    display: flex ;
    justify-content:center;
    align-items:center ;

    
    input{
        width:600px ;
        height:80px ;
        border:1px solid black ;
        border-radius: 100px ;
        font-size: 2em ;
        padding-left: 25px ;
    }

    ion-icon{
        width:80px ;
        height:800px ;
        color: rgba(255, 255, 255, 1)
    }

`