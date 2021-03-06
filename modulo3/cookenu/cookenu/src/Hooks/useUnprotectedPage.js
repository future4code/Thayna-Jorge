import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToReceitas } from "../rotas/coordenadas";

const useUnprotectedPage = () => {
    const history= useHistory()
    useLayoutEffect (() => {
        const token = localStorage.getItem("token")
        if(token){
            goToReceitas(history)
        }
    }, [history])
}

export default useUnprotectedPage