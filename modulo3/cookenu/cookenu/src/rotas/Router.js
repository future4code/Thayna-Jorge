import Reac from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import TelaLogin from "../Paginas/Login/TelaLogin"
import TelaAdcReceitas from "../Paginas/Tela_Adc_Receitas/TelaAdcReceitas"
import TelaDetalhesReceitas from "../Paginas/Tela_Detalhes_Receita/TelaDetalhesReceitas"
import TelaInscreverse from "../Paginas/Tela_Increver-se/TelaInscreverse"
import TelaReceitas from "../Paginas/Tela_Receitas/TelaReceitas"
import Erro from "../Paginas/Erro/Erro"

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                
                <Route exact path="/login">
                    <TelaLogin/>
                </Route>

                <Route exact path="/cadastro">
                    <TelaInscreverse/>
                </Route>

                <Route exact path="/">
                    <TelaReceitas/>
                </Route>

                <Route exact path="/adicionar-receitas">
                    <TelaAdcReceitas/>
                </Route>

                <Route exact path="/detalhes/:id">
                    <TelaDetalhesReceitas/>
                </Route>

                <Route>
                    <Erro/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router