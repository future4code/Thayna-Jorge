import styled from "styled-components";

export const ContainerProjetos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 50px;
    font-family:Arial;

    @media (min-width: 1000px) {
    width: 100%;
    }

    img{
        width: 100% ;
        height: auto;
        border-radius: 10px;
        margin: 25px;

        @media (min-width: 1000px) {
            width: 900px;
            height: auto;

        }
    }
    
    button{
        width: 200px;
        height: 50px;
        font-size:30px;
        font-family:Arial;       
        border-radius:5px;
        background-color: #5b8cab ;
        color: #ffff;
        margin: 10px;
        font-size:20px;
            &:hover {
             background-color: #2e618a;
            }

    }

    p{
        text-align: center;
        font-size: 20px;

        @media (min-width: 1000px) {
            font-size:25px;

        }
    }
   
    

`