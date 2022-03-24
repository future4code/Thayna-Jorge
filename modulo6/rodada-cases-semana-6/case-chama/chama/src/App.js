import React, {useState} from "react";
import { Busca } from "./FormBusca/Busca";
import {Usuario} from "./TelaUsuario/Usuario"
import { BASE_URL } from "./Hooks/url";
import axios from "axios"

function App () {

  const [ busca, setBusca] = useState ()

    const [usuarios, setUsuarios] = useState ({})

    const [historico, setHistorico] = useState([])

    const buscUsuario = (ev) => {
        setBusca(ev.target.value)
    }
      
    const getUser = () => {
        axios.get(`${BASE_URL}/users/${busca}`)
        .then((res) => {
          console.log(res.data)
          setUsuarios(res.data);

        })
        .catch((erro) => {
          console.log(erro.response)
        })
        setHistorico([...historico, busca])
    }

    console.log(historico)
        
   return (
    <div>
       <Busca getUser={getUser} buscUsuario={buscUsuario} busca={busca}/>
       <Usuario usuarios={usuarios}/>
    </div>
  )
}

export default App
