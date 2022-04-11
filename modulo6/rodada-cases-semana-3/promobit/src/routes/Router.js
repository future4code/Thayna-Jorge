import { BrowserRouter, Switch, Route } from "react-router-dom"
import { DetailsPage } from "../components/DetailsPage/DetailsPage"
import { HomePage } from "../components/HomePage/HomePage"

export const Router = () => {

    

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/detalhes-filmes/:id">
                    <DetailsPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}