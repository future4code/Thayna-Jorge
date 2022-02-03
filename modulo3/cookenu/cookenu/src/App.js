import React from "react"
import Router from "./rotas/Router"
import theme from "./constantes/theme"
import { ThemeProvider } from "@material-ui/core/styles"
import { useState } from "react"
import Header from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min"


const App = () => {
  const token = localStorage.getItem("token")
  const [ trocaButton, setTrocaButton] = useState(token ? "Logout" : "Login")


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header trocaButton={trocaButton} setTrocaButton={setTrocaButton}/>
      <Router setTrocaButton={setTrocaButton}/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
