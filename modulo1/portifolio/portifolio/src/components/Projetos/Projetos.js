import react from "react"
import Receitas from "../img/cookenu-receitas.png"
import Login from "../img/cokenu-login.png"
import Adc from "../img/cookenu-adcreceita.png"
import { ContainerProjetos } from "./styled"

export const Projetos = () =>{
    return (
        <ContainerProjetos>
            <hr/>
            <h1>Projeto Cookenu</h1>

            <p>
                Tecnologias utilizadas : HTML, CSS, JavaScript, Integração com API e React. <br/>
            </p>
            <a href="https://sore-earthquake.surge.sh/" target="_blank"><button>Ir para Cookenu</button></a>
            <a href="https://github.com/Thaysaadj/cookenu/" target="_blank"><button>Ver Código</button></a>

            <img src={Login}/>
            <img src={Receitas}/>
            <img src={Adc}/>
        </ContainerProjetos>
    )
}