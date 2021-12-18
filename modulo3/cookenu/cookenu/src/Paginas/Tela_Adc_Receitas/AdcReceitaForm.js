import React from "react"
import {InputsContainer} from "./StyledAdcReceitas"
import useForm from "../../Hooks/useForm"
import { Button, TextField } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import axios from "axios"
import {BASE_URL} from "../../constantes/urls"

const AdcReceitaForm = () => {
    const history= useHistory()
    const [form, onChange, clear] = useForm ({title: "", description: "" , image: ""})   

    const criaReceita =() => {
        axios.post(`${BASE_URL}/recipe`, form, {
            headers : {
                Authorization: localStorage.getItem("token")
            }
        })
        .then((response)=>{
            alert(response.data.message)
            clear()
        })
        .catch((error) => {
            alert(error.response.message)
            console.log(error)
        })
    }

    const onSubmitForm = (event) => {
       event.preventDefault()
       criaReceita(
        
       )
    }

    return (
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        label={"Titulo"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        autoFocus
                    />

                    <TextField
                        name={"description"}
                        value={form.description}
                        onChange={onChange}
                        label={"Descrição"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                        
                    />

                    <TextField
                        name={"image"}
                        value={form.image}
                        onChange={onChange}
                        label={"Foto"}
                        variant={"outlined"}
                        fullWidth
                        margin={"normal"}
                        required
                    
                    />

                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        color={"primary"}
                        
                    >
                        Fazer Cadastro
                    </Button>

                </form>
            </InputsContainer>
    )
}
export default AdcReceitaForm