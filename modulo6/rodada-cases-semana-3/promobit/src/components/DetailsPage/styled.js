import styled from "styled-components";

export const ContainerDetails = styled.div`
    display:flex ;
    flex-direction:row ;
    align-items:center ;
    justify-content:center ;
    min-height:500px;
    background-color: #270082 ;
    
    p{
        margin: 2px ;
    }

    @media (max-width:400px){
        display:flex ;
        flex-direction:column ;

    }
`

export const CardMovieDetails = styled.img `
    width: 250px;
    height:350px ;
    border-radius: 8px;
    margin-right: 35px ;
    margin-left:50px ;
    
    @media (max-width:400px){
       width:200px ;
       height:320px ;
       margin-top: 2rem ;
    }

`

export const CardInfo = styled.div `
    width:50% ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:flex-start ;
    color: #fff;
    padding: 1rem ;

    p:nth-child(1){
        font-size: 25px ;
        font-weight: bolder;
    }

    p:nth-child(2){
        font-weight: lighter;
    }
    
    p:nth-child(3){
        font-weight: lighter; 
    }

    p:nth-child(4){
        font-weight: lighter;
    }

    p:nth-child(5){
        font-weight: lighter;
    
    }
    
    @media (max-width:400px){
        width:75% ;
        display:flex ;
        justify-content:center ;
        margin-top: 60px;


        p:nth-child(1){
            font-size: 16px ;
        }

        

    }

    
`