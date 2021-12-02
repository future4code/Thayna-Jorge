import axios from "axios";
import react, { useState , useEffect} from "react";
import styled from "styled-components";
import {StyledTI, PerfilCandit } from '../../styled'


export const TelaInicial = () => {
  const [perfil, setPerfil] = useState ({})

  const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thayna-saad-carver/person"

  useEffect(() => {

  }, [])

  const pegarPerfil = () => {
    axios.get(url)
    .then(() => {
        // console.log(response.data)
    })
    .catch((erro) => {
          console.log(erro.response)
    })
  }


  return (
    <StyledTI>
     
        <PerfilCandit src={"https://picsum.photos/id/1/200/300"} />
        <h2>Nome</h2>
        <p>Moro no Rj e tenho 25 anos</p>
        <div>
          <button>X</button>
          <button>V</button>
        </div>
      
    </StyledTI>
  )
}

