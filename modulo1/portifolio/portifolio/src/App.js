import react from "react";
import styled from "styled-components";
import { Header } from "./components/Header/Header";
import { GlobalStyled } from "./styled";
import { Info } from "./components/Info/Info";
import { Formacao } from "./components/Formacao/Formacao";
import { Contato } from "./components/contato/Contato";
import {Projetos} from "./components/Projetos/Projetos"

export const BodyContainer = styled.div `
  background-color: #ffffff;

  @media (max-width: 1000px) {
    width: 1168px;
    }

`

const App =() => {
  return (
    <BodyContainer>
      <GlobalStyled/>
        <Header/>
        <Info/>
        <Formacao/>
        <Projetos/>
        <Contato/>
    </BodyContainer>
  );
}

export default App
