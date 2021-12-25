import styled from "styled-components";

export const FundoBackground = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
   align-items: center;
   justify-content:center;
   flex-direction:column;
   padding: 10px;
   
   @media (max-width: 1000px) {
    width: 1168px;
  
`

export const TextoInfo = styled.text `
   text-align: center;
   padding: 250px;
   font-family: inherit;
   font-weight:lighter;
  
   

button{
   width: 25%;
   height: 40px;
   font-size:30px;
   font-family: Monospace;
   border-radius:30px;
   background-color: #421293 ;
   color: #ffff;
   &:hover {
      background-color: #ff91fc;
   }

}



`




