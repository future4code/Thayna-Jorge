import React, { useEffect } from "react"
import { useHistory } from "react-router"
import axios from "axios"


export const TripDetailsPage = () => {
    const history = useHistory()

    const voltaPainelAdmin = () => {
        history.goBack("paineladmin")
    }
   
    useEffect (() => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thayna-saad/trip/WyZ9w6ag4sodlPEehcPz", {
            headers : {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklWb…jU3fQ.W7zlOUrcYGIZVwvC5LtgUXkLdDXxLvQwKLByPr9OZZA"
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