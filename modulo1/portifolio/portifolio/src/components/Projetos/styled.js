import styled from "styled-components";

export const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    font-family:Arial;
    /* @media (max-width: 800px) {
    width: 1168px;
    } */

    img{
        width: 1050px ;
        height: 500px;
        border-radius: 10px;
        margin: 25px;
    }
    
    button{
        width: 250px;
        height: 50px;
        font-size:30px;
        font-family:Arial;       
        border-radius:30px;
        background-color: #421293 ;
        color: #ffff;
        margin: 10px;
        font-size:25px;
            &:hover {
             background-color: #ff5500;
            }

   }
   

`