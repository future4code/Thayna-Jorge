import { useState } from "react"
import { useHistory } from "react-router-dom" 
import { api_key } from "../../constants/api_key"
import { BASE_URL } from "../../constants/url"
import { useRequestData } from "../../Hooks/useRequestDada"
import { goToMovieDetails } from "../../routes/coordinator"
import { Filter } from "../Filter/Filter"
import { CardMovie, ContainerCardMovie, ContainerButton } from "./styled"

export const HomePage = () => {

    const history = useHistory()

    const [page, setPage] = useState(1)

    const changePageNext = (number) => {
        setPage(page + number)
        window.scrollTo(0,0)
    }

    const changePageBack = (number) => {
        if(page >= 2){
            setPage(page - number)
        }
        window.scrollTo(0,0)
    }

    

    const showMovies = useRequestData ([],`${BASE_URL}/popular?${api_key}&language=en-US&page=${page}`)

    console.log(showMovies)

    const showCardMovie = showMovies.map((movie) => {
        return(
             <CardMovie key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} onClick={() => goToMovieDetails(history, movie.id)}/>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
            </CardMovie>
            
        )
    })


    return(
        <div>
            <Filter/>
            <ContainerCardMovie>
                {showCardMovie}
            </ContainerCardMovie>
            <ContainerButton>
            <button onClick={(() => {changePageBack(1)})}>Voltar</button>
            <button onClick={(() => {changePageNext(1)})}>Próximo</button>
            </ContainerButton>
        </div>
    )
}