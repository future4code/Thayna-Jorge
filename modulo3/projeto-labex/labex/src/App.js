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

          <Route exact path = {"/trips/list"}>
            <ListTripPage />
          </Route>

          <Route exact path = {"/trips/application"}>
            <ApplicationFormPage />
          </Route>

          <Route exact path = {"/login"}>
            <LoginPage />
          </Route>

          <Route exact path = {"/admin/trips/list"}>
            <AdminHomePage />
          </Route>

          <Route exact path = {"/admin/trip/:id"}>
            <TripDetailsPage />
          </Route>

          <Route exact path = {"/admin/trips/create"}>
            <CreateTripPage />
          </Route>


      </Switch>
    </BrowserRouter>
  )
}
export default App