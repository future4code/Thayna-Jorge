import React from "react"
import Router from "./rotas/Router"
import theme from "./constantes/theme"
import { ThemeProvider } from "@material-ui/core/styles"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  )
}

export default App
