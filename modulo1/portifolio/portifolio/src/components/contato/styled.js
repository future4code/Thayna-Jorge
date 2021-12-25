import styled from "styled-components";

export const ContatoContainer = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    height: 600px;
    /* width: 1050px; */
    border: 1px solid black ;
    background-image:url("https://numarketing.co.uk/wp-content/uploads/2014/06/Website-Design-Background.png");
    background-size:cover ;
    color: white;
    @media (max-width: 800px) {
    width: 1168px;
    }

    h1{
      font-size: 80px;
      font-family:Arial;
    }

    h2{
      font-size: 50px;
      font-family:Arial;
      
    }
    
  }
`