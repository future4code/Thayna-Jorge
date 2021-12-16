import React from "react"
import { ContainerPai, LogoImage, BotaoInscreverse } from "./StyledLogin"
import logo from "../../Imagens/logomarca.png"
import { Button} from "@material-ui/core"
import LoginForm from "./LoginForm"
import { useHistory } from "react-router-dom"
import { goToCadastro } from "../../rotas/coordenadas"
import useUnprotectedPage from "../../Hooks/useUnprotectedPage"

const TelaLogin = ({setTrocaButton}) => {
    useUnprotectedPage()
    const history = useHistory()
    return (
        <ContainerPai>
            <LogoImage src={logo} />
            <LoginForm setTrocaButton={setTrocaButton}/>
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