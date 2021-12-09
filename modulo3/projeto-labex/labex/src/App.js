import React from "react"
import "./app.css"
import {BrowserRouter, Route, Switch } from "react-router-dom"
import { AdminHomePage } from "./pages/AdminHomePage"
import { ApplicationFormPage } from "./pages/ApplicationFormPage"
import { CreateTripPage } from "./pages/CreateTripPage"
import { HomePage } from "./pages/HomePage"
import { ListTripPage } from "./pages/ListTripPage"
import { LoginPage } from "./pages/LoginPage"
import { TripDetailsPage } from "./pages/TripDetailsPage"


const App = () => {
  return (
    <BrowserRouter>
      <Switch>

        
          <Route exact path = {"/"}>
            <HomePage />
          </Route>  

          <Route exact path = {"/listaviagens"}>
            <ListTripPage />
          </Route>

          <Route exact path = {"/formularioinscricao"}>
            <ApplicationFormPage />
          </Route>

          <Route exact path = {"/login"}>
            <LoginPage />
          </Route>

          <Route exact path = {"/paineladmin"}>
            <AdminHomePage />
          </Route>

          <Route exact path = {"/detalhesviagem"}>
            <TripDetailsPage />
          </Route>

          <Route exact path = {"/criarviagem"}>
            <CreateTripPage />
          </Route>


      </Switch>
    </BrowserRouter>
  )
}
export default App