import React, { useEffect } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import {useProtectPage} from "./Hooks/useProtectPage"

export const TripDetailsPage = () => {


    const history = useHistory()
    
    const voltaPainelAdmin = () => {
        history.goBack("/paineladmin")
    }
   
    useProtectPage()

    useEffect (() => {
        const token = localStorage.getItem("token")
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thayna-saad/trip/WyZ9w6ag4sodlPEehcPz", {
            headers : {
                auth: token
            }
        })
          .then((response) => {
              console.log ("Deu Certo", response.data)
          })  
            .catch((error) =>{
                console.log("Deu erro" , error.response)
            })

    }, [] )

    return (
        <div>
            <p>Detalhes da Viagem</p>
            <button onClick={voltaPainelAdmin}>Voltar</button>
        </div>
    )
}