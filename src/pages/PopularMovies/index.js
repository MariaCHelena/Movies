import React from 'react'
import axios from 'axios';
import { Container, MovieList, Movie } from './styles';
import { useState, useEffect } from 'react'
import { APIKey } from '../../config/key';
import useAuth from '../../hooks/useAuth';

const PopularMovies = () => {
    const [movies, setMovies] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const { createToken } = useAuth()
    const { requestSession } = useAuth()
    
    useEffect(() => {
      // consumir a api...
      fetch(`
      https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(err => console.log(err))
      /*
        fetch(`
      https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {setMovies(data.results)});
      */
      
      createToken()
      console.log(localStorage)
    }, [])

    return (
      <Container>
        <h1>Movies</h1>
        <button onClick={requestSession}>Botão</button>
        <MovieList>
          {movies.map(movie => {
              return (
                <Movie key={movie.id}>
                  <a href="https://google.com.br"><img src={`${image_path}${movie.poster_path}`} alt="" /></a>
                  <span>{movie.title}</span>
                </Movie>
              )
            })}
        </MovieList>
      </Container>
    )
}

export default PopularMovies