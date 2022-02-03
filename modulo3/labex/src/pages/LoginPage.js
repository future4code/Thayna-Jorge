import axios from "axios"
import React, { useState } from "react"
import { useHistory } from "react-router"
import { useProtectPage } from "./Hooks/useProtectPage"


export const LoginPage = () => {
    useProtectPage()

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const token = localStorage.getItem("token")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)
    }

    const fazerLogin = (event) => {
        event.preventDefault()

        const body = {
            email: email,
            password: senha
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/thayna-saad/login", body)
            .then((resposta) => {
                console.log("Deu certo", resposta.data.token)
                localStorage.setItem("token", resposta.data.token)
                history.push("/paineladmin")
            })
            .catch((erro) => {
                console.log("Deu errado", erro.response)
            })
    }



    const history = useHistory()

    const voltarParaHome = () => {
        if (token) {
            history.push("/paineladmin")
        }
    }

    return (
        <div>
            <p>Login</p>
            <form onSubmit={fazerLogin}>
                <input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                    pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, }"}
                />
                <input
                    placeholder="Senha"
                    type="senha"
                    value={senha}
                    onChange={onChangeSenha}
                    required
                    pattern={"^.{3,}"}
                    title={"Sua senha deve ter no mínimo 3 caracteres"}
                />
                <button onClick={voltarParaHome}>Voltar</button>
                <button>Entrar</button>
            </form>
        </div>
    )
}