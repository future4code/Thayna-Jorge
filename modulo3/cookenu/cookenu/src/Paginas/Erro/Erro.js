import React from "react"
import { PaginaDeErro, ImagemErro } from "./StyledErro"
import erro from "../../Imagens/errinho.jpg"
import { Typography } from "@material-ui/core"

const Erro = () => {
  return (
    <PaginaDeErro>
      <ImagemErro src={erro}/>
      <Typography
         color={"primary"} variant={"h4"} align={"center"}> Erro 404 - Pagina não encontrada 
      </Typography>   
    </PaginaDeErro>
  )
}

export default Erro
