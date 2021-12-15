import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { StyledToolbar } from './Styled'
import Button from '@material-ui/core/Button'
import { goToLogin, goToReceitas } from '../../rotas/coordenadas'
import { useHistory } from 'react-router-dom'


const Header = () => {
    const history = useHistory()
  return (
     <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToReceitas(history)} color="inherit"> CookeNu </Button>
          <Button onClick={() => goToLogin(history)}color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
  )
}
export default Header