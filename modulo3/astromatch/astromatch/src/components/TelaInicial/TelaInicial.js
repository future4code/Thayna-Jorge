import axios from "axios";
import react, { useState , useEffect} from "react";
import styled from "styled-components";
import {StyledTI, PerfilCandit } from '../../styled'


export const TelaInicial = () => {
  const [perfil, setPerfil] = useState ({})
  const [escolha, setEscolha] = useState ({})
  const [priximo, setProximo] = useState ({})

  

  useEffect(() => {
      pegarPerfil()
  }, [])



  const pegarPerfil = () => {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thayna-saad-carver/person"

    axios.get(url)
    .then((res) => {
        setPerfil(res.data.profile)
        console.log(res.data)
    })
    .catch((erro) => {
          console.log(erro.response)
    })
  }




    const escolhePessoa = (choice) => {
      const url2 ="https://us-central1-missao-newton.cloudfunctions.net/astroMatch/thayna-saad-carver/choose-person"
      const body = {
        "id": perfil.id,
        "choice": true
      }

      axios.post(url2, body)
      .then ((res)=>{
          console.log(res)
          if (res.data.isMatch){
            window.alert("Você tem um novo Match")
          }

      })
      .catch((erro) => {
        console.log(erro.data)
      })
    }


  return (
    <StyledTI>

        <PerfilCandit src={perfil.photo} />
        <h2>{perfil.name}, {perfil.age}</h2>
        <p>{perfil.bio}</p>
        <div>
          <button onClick={() => {escolhePessoa(false)}}>X</button>
          <button onClick={() => {escolhePessoa(true)}}>V</button>
        </div>
      
    </StyledTI>
  )
}

