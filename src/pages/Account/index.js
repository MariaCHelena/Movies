import React, { useEffect, useState } from 'react'
import { APIKey } from '../../config/key'
import useAuth from '../../hooks/useAuth'
import * as C from './styles'

const Account = () => {
    
    const { userInfo } = useAuth()
    const [favoriteMovies, setFavoriteMovies] = useState()
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/account/${userInfo.id}/favorite/movies?api_key=${APIKey}&session_id=${localStorage.getItem("api_id")}&language=en-US&sort_by=created_at.asc&page=1`)
        .then(response => response.json())
        .then(data => setFavoriteMovies(data.results))
        
    }, [])  
    
    return (
        <C.Container>
            Teste
                <C.MovieList>
                    {favoriteMovies.map(favoriteMovies => {
                    return (
                        <C.Movie key={favoriteMovies.id}>
                            <a href="https://google.com.br"><img src={`${image_path}${favoriteMovies.poster_path}`} alt="" /></a>
                            <span>{favoriteMovies.title}</span>
                        </C.Movie>
                    )
                    })}
                </C.MovieList>      
        </C.Container>
    )
}

export default Account