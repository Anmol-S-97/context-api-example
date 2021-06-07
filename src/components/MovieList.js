import React, {useContext, useState} from 'react'
import {MovieListContext} from '../MovieListContext';

const MovieList = () => {

const [movies, setMovies] = useContext(MovieListContext)

return (
    <div>
        {movies.price}
        {movies.map((movie)=>
            <li key={movies.name}>{movie.name}</li>
        )}       
    </div>
)
}

export default MovieList
