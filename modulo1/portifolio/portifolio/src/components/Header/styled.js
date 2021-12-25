import styled from "styled-components";


export const FotoPerfil = styled.div `
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-image:url("https://d33wubrfki0l68.cloudfront.net/b4759e96fa9ada8ee8caa4c771fcd503f289d791/5cf1a/img/triangle_background.jpg");
        background-size:cover ;
        width: 100%;
        color: white;
        color:#efe8f1 ;
        font-family:Arial;
        font-weight:lighter;

        /* @media (max-width: 1000px) {
    width: 1168px;
  } */
        
        

    img{
        
        border-radius:50%;
        width: 380px;
        height: 380px;
        animation: go-back 1s;
        @keyframes go-back {
     from {
        transform: translateX(100px);
        }
         to {
            transform: translateX(0);
        }

        
    } 


    }

    h1 {
        padding: 120px;
        animation: go-back 1s;
        @keyframes go-back {
     from {
        transform: translateX(100px);
        }
         to {
            transform: translateX(0);
        }
    }

    div {
    word-wrap:break-word;
 }

`
