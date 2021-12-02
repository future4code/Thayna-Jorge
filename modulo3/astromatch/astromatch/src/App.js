import React, { useState } from "react"
import { TelaDeMatch } from "./components/TeladeMatch/TelaDeMatch"
import { TelaInicial } from "./components/TelaInicial/TelaInicial"
import Fogo from './img/fire.png'
import Logo from './img/transferir.png'
import {Header, IconeFogo , StyledTI   } from './styled';

const App = () => {
  const [paginaAtual, setPaginaAtual] = useState ("Tela Inicial")

  const trocaTela = () =>{
    
    if (paginaAtual === "Tela Inicial") {
        setPaginaAtual("Tela de Match")
    }else {
      setPaginaAtual ("Tela Inicial")
    }
  }

  const limpaMatch = () => {
    console.log("Vou limpar Geral !")
  }


  return (
    <StyledTI>
       <Header>
          <IconeFogo>
          <img src={Logo} />
          <img src={Fogo} onClick={trocaTela}/>
        </IconeFogo>
      </Header>


      {paginaAtual === "Tela Inicial" ? <TelaInicial/> : <TelaDeMatch />}
      
      <button onClick={limpaMatch}>Limpar seus Matches</button>
    </StyledTI>
  )
}

export default App