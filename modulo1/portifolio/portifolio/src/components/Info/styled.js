import styled from "styled-components";

export const FundoBackground = styled.div`
   width: 100%;
   height: auto;
   display: flex;
   align-items: center;
   justify-content:center;
   flex-direction:column;
   padding: 5px;
   
   @media (min-width: 1000px) {
    width: 100%;
    font-size:25px;
   }
  
`

export const TextoInfo = styled.p`
   text-align: center;
   /* padding: 250px; */
   font-family:Arial;
   font-weight:lighter;
  
   

   button{
      width: 40%;
      height: 44px;
      font-size:20px;
      font-family: Arial;
      border-radius:10px;
      background-color: #5b8cab;
      color: #ffff;
      &:hover {
         background-color: #2e618a;
      }

      @media (min-width: 1000px) {
         width: 25%;
         font-size:23px;
      }

   }  

}
`




