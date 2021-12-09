import axios from "axios"
import React, { useState } from "react"
import { useHistory } from "react-router"

export const LoginPage = () => {
    const [email, setEmail] = useState ("")
    const [senha, setSenha] = useState ("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    const fazerLogin = () => {
        console.log("To aqui", email, senha)
        const body = {
            email : email,
            password : senha
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thayna-saad/login", body)
            .then((resposta) => {
                console.log("Deu certo", resposta.data)
            })
            .catch((erro) => {
                console.log("Deu errado", erro.response)
            })
    }
    


    const history = useHistory()

    const voltarParaHome = () => {
        history.goBack("/")
    }    

    return (
        <div>
            <p>Login</p>
            <input
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />
            <input
                placeholder="Senha"
                type="senha"
                value={senha}
                onChange={onChangeSenha}
            />
            <button onClick={voltarParaHome}>Voltar</button>
            <button onClick={fazerLogin}>Entrar</button>
        </div>
    )
}