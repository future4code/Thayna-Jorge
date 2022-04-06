import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (initialData, url) => {
    const [movie, setMovie] = useState(initialData)
    
    useEffect(() => {
        axios.get(url)
            .then((res) =>{
                setMovie(res.data.results)
            })
            .catch((err) => {
                console.log("erro data", err.response)
            })
    }, [url])
    return(movie)
}