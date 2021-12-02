import {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'
// import TelaDeMatch from './components/TelaDeMatch'
// import TelaInicial from './components/TelaInicial'

const App = () => {
  const [pagina, setPagina] = useState ('HOME')

  const trocaPagina = (pagina) => {
    setPagina(pagina)
  }
  
  // const escolhaPagina = () => {
  //   switch (pagina){
  //     case "HOME":
  //       return <TelaInicial trocaPagina={trocaPagina}/>
  //     case "MATCH":
  //       return <TelaDeMatch trocaPagina={trocaPagina}/>
  //     default:
  //       return <TelaInicial trocaPagina={trocaPagina}/>  
  //   }
  // }

 


  return (
    <div>
     
      <h1>ASTROMATCH</h1>
      <button>Descartar</button>
      <button>Dar Match</button>
    </div>
  );
}

export default App;
