import React from "react"
import {InputsContainer} from "./StyledLogin"
import useForm from "../../Hooks/useForm"
import { Button, TextField } from "@material-ui/core"
import { login } from "../../services/usuario"
import { useHistory } from "react-router-dom"




const LoginForm = ({setTrocaButton}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })
    const history = useHistory()


    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setTrocaButton)
    }

    

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    
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
                        Fazer Login
                    </Button>

                </form>
            </InputsContainer>
    )
}
export default LoginForm