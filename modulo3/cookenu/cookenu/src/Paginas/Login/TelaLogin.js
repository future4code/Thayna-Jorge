import React from "react"
import { ContainerPai, LogoImage, InputsContainer, BotaoInscreverse } from "./styledLogin"
import logo from "../../Imagens/logomarca.png"
import { Button} from "@material-ui/core"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import { goToCadastro } from "../../rotas/coordenadas"

const TelaLogin = () => {
    const history = useHistory()
    return (
        <ContainerPai>
            <LogoImage src={logo} />
            <LoginForm/>
            <BotaoInscreverse>
                <Button
                    onClick={() => goToCadastro(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"noraml"}
                >

                    Criar Conta
                </Button>
            </BotaoInscreverse>
        </ContainerPai>
    )
}
export default TelaLogin