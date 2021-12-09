import React, { useDebugValue, useEffect } from "react"
import { useHistory } from "react-router"
import axios from "axios"


export const TripDetailsPage = () => {
    const history = useHistory()

    const voltaPainelAdmin = () => {
        history.goBack("/admin/trips/list")
    }
   
    useEffect (() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thayna-saad/trip/0aQ9retlt9zxpeo40G2M")
          .then((response) => {
              console.log (response.data)
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