import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestDetail = (initialData, url) => {
    const [movie, setMovie] = useState(initialData)
    
    useEffect(() => {
        axios.get(url)
            .then((res) =>{
                setMovie(res.data)
            })
            .catch((err) => {
                alert("Algo deu errado, tente novamente", err.response.status_message)
            })
    }, [url])
    return(movie)
}