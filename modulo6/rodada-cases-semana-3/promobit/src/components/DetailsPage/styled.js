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
    width:40% ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:flex-start ;
    color: #fff;
    padding: 1rem ;
    text-align:justify ;

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
export const ContainerCast = styled.div `
    display:flex ;
    flex-direction:row ;
    overflow:auto ;
`
export const CardCast = styled.div `
    display:flex ;
    flex-direction: column;
    justify-content: space-between;
    width:200px ;
    padding: 0.5em;
    align-items: center;
    border-radius: 7px;
    transition: 0.5s;
    border: 1px solid rgba(195, 195, 195, 0.5);
    box-shadow: 1px 1px 2px gray;
    margin: 1rem;

    :hover{
        transform: translateY(-3px);
    }

    img{
        width:120px ;
        height:170px ;
        border-radius:3px ;
    }

    p{
        margin:0 ;
    }

    p:nth-child(1){
        font-weight: bold;
    }

`

export const CastInfo = styled.div `
    height: 18%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.50em;
    
`
export const ContainerRecommendation = styled.div`
    display:flex ;
    justify-content:space-around ;
    width:200px;
    height:250px ;
`

export const CardRecommendation = styled.div `
    width:200px;
    height:250px ;
`