import { api_key } from "../../constants/api_key";
import { BASE_URL } from "../../constants/url"
import { useRequestDetail } from "../../Hooks/useRequestDetail";
import { useParams } from 'react-router-dom';
import { Header } from "../Header/Header";
import { CardMovieDetails, ContainerDetails, CardInfo, CardCast, CastInfo, ContainerCast, CardRecommendation, ContainerRecommendation} from "./styled";
import { useState } from "react";
import { useRequestCast } from "../../Hooks/useRequestCast";
import { useRequestData } from "../../Hooks/useRequestDada";


export const DetailsPage = () => {
  
    const params = useParams()
    
    const movie = useRequestDetail({}, `${BASE_URL}/${params.id}?${api_key}&language=pt-BR`)

    const castMovie = useRequestCast([], `${BASE_URL}/${params.id}/credits?${api_key}&language=pt-BR`)

    const castRecommend = useRequestData([],`${BASE_URL}/${params.id}/recommendations?${api_key}&language=pt-BR` )

    console.log(castRecommend)

    const runtime = () => {
        const hour = Math.floor(movie.runtime / 60);
        const min = movie.runtime % 60;
        const textHour = (`00${hour}`).slice(-2);
        const textMin = (`00${min}`).slice(-2);
        return `${textHour}h${textMin}m`;
    }

    const cast = castMovie.map((item) => {
        return(
            
            <CardCast key={item.cast_id}>
                <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}/>
                <CastInfo>
                <p>{item.name}</p>
                </CastInfo>
            </CardCast>
            
        )
    })

    const recommendations= castRecommend.map((item) => {
        return(
            <CardRecommendation>
            <img src={`https://image.tmdb.org/t/p/recommendations/${item.poster_path}`}/>
            <p>{item.original_title}</p>
            </CardRecommendation>
        )
    })

    
    return(
        <div>
            <Header/>
            <ContainerDetails>
                <CardMovieDetails
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                />
                <CardInfo>
                <p>{movie.title}</p>
                <p>{movie.release_date}</p>
                <p>{runtime()}</p>
                <p>Sinopse</p>
                <p>{movie.overview}</p>    
                </CardInfo>
            </ContainerDetails>
            <ContainerCast>
                {cast}
            </ContainerCast>
            <ContainerRecommendation>
                {recommendations}
            </ContainerRecommendation>

        </div>
    )
}