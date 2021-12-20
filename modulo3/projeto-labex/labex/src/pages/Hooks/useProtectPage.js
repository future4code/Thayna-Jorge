import { useHistory } from "react-router-dom"
import { useEffect } from "react/cjs/react.development"

export const useProtectPage = () => {
    const history = useHistory()

    useEffect(() =>{
        const token = localStorage.getItem("token")

        if(token === null) {
            console.log("Não está logado")
            history.push("/login")
        }
    }, [])
}