import styled from "styled-components";

export const ContainerGeral = styled.div `
    background-color: violet;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;


    button {
        
        background-color: green;
        padding: 20px;
        margin: 10px;
        
    }
    
    button:hover {
        background-color: yellow;
        transition: 0.3s;
    
    }
`