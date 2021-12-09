import React, { useDebugValue } from "react"
import { useHistory } from "react-router"
import { ContainerGeral } from "../style/StyledGeral"
import axios from "axios"

// const ContainerListaDeViagens = styled.div `
//     display: flex;
//     flex-direction: column;
    
//     align-items: center;
//     justify-content: center;
//     border: 2px solid gray ;
//     width: 500px;
//     height: 250px;

//    button {
//        width: 80px;
//        height: 50px;
//    } 
// `

export const ApplicationFormPage = () => {
    const history = useHistory()

    const voltarParaListaDeViagens = () => {
        history.goBack("/trips/list")
    }


    

    return (
        <ContainerGeral>
            
            <h1>Inscrever-se Para uma Viagem</h1>
            <select>
            <option desabled selected>Escolha uma viagem</option>    
            </select>

            <input
                type="text"
                placeholder="Nome"
                // value="Conteudo do State"
                // onChange={Funçaõ }
            />
            <input
                type="number"
                placeholder="Idade"
                // value="Conteudo do State"
                // onChange={Funçaõ }
            />
            <input
                type="text"
                placeholder="Texto de Candidatura"
                // value="Conteudo do State"
                // onChange={Funçaõ }
            />
            <input
                type="text"
                placeholder="Profissao"
                // value="Conteudo do State"
                // onChange={Funçaõ }
            />


            <select>
            <option desabled selected>Escolha uma viagem</option>    
            </select>

            <div>
            <button onClick={voltarParaListaDeViagens}>Voltar</button>
            <button>Enviar</button>
            </div>
        </ContainerGeral>
    )
}