import React from "react"
import {InputsContainer} from "./StyledInscreverse"
import useForm from "../../Hooks/useForm"
import { Button, TextField } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { cadastro } from "../../services/usuario"

const CadastroForm = ({setTrocaButton}) => {
    const history= useHistory()
    const [form, onChange, clear] = useForm({ name: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        cadastro(form, clear, history, setTrocaButton)
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"name"}
                        value={form.name}
                        onChange={onChange}
                        label={"Nome"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                    />

                    <TextField
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        label={"E-mail"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"email"}
                    />

                    <TextField
                        name={"password"}
                        value={form.password}
                        onChange={onChange}
                        label={"Senha"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        margin={"noraml"}
                    >
                        Fazer Cadastro
                    </Button>

                </form>
            </InputsContainer>
    )
}
export default CadastroForm