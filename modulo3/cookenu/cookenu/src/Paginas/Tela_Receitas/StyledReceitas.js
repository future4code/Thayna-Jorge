import styled from "styled-components";
import { Fab } from "@material-ui/core";

export const CardTelaReceita = styled.div` 
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin:30px;
    
`

export const AddReceitaButton = styled(Fab)`
    position:fixed !important;
    right:20px;
    button:20px;
    z-index:3;
`