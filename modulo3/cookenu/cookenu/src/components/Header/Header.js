import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar } from './Styled'
import Button from '@material-ui/core/Button'
import { goToLogin, goToReceitas } from '../../rotas/coordenadas'
import { useHistory } from 'react-router-dom'


const Header = ({trocaButton, setTrocaButton}) => {
    const token = localStorage.getItem("token")
    const history = useHistory()


    const logout = () => {
      localStorage.removeItem("token")
    }

    const actionButton = () => {
      if (token) {
        logout()
        setTrocaButton("Login")
        goToLogin(history)
      } else {
        goToLogin(history)
      }
    }

  return (
     <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToReceitas(history)} color="inherit"> CookeNu </Button>
          <Button onClick={actionButton} color="inherit">{trocaButton}</Button>
        </StyledToolbar>
      </AppBar>
  )
}
export default Header