import styled from "styled-components";

export const ContatoContainer = styled.div `
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    height: 600px;
    width: 100%;
    border: 1px solid black ;
    background-image:url("https://numarketing.co.uk/wp-content/uploads/2014/06/Website-Design-Background.png");
    background-size:cover ;
    color: white;
    
     @media (min-width: 1000px) {
        width: 100%;
      } 
    
    h1{
      font-size:35px;
      font-family:Arial;

      @media (min-width: 1000px) {
        font-size:50px;
      } 
    }

    h2{
      font-size: 20px;
      font-family:Arial;
      text-align: center;
      
      
      @media (min-width: 1000px) {
        font-size:35px;
        
      } 
    }

    a{
      text-decoration:none;
      color:#fff;
    }
    
  }
`