import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestCast = (initialData, url) => {
    const [movie, setMovie] = useState(initialData)
    
    useEffect(() => {
        axios.get(url)
            .then((res) =>{
                setMovie(res.data.cast)
            })
            .catch((err) => {
                alert("Algo deu errado, tente novamente", err.response.status_message)
            })
    }, [url])
    return(movie)
}