import styled from "styled-components"

export const ContainerCardMovie = styled.div `
    display:flex ;
    align-items:center ;
    justify-content:center ;
    flex-direction:row;
    flex-wrap:wrap ;
`

export const CardMovie = styled.div`
    width:200px ;
    margin: 15px ;

    img{
        width:200px ;
        height:250px ;
    }

    p{
        font-size: 12px ;
    }
`

export const ContainerButton = styled.div `
    display:flex ;
    justify-content:space-evenly ;
    margin-bottom:30px ;

    button{
        width:100px ;
        border-radius: 10px ;
        background-color: #5C16C5 ;
        color: #fff;
    }
`