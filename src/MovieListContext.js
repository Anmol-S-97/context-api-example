import React,{useState, createContext} from 'react'

export const MovieListContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10'
        },
        {
            name: 'Total Recall',
            price: '$10'
        },
        {
            name: 'Insidious',
            price: '$10'
        },
        {
            name: 'Oblivion',
            price: '$10'
        }
    ]);
    return(
        <MovieListContext.Provider value={[movies, setMovies]}>{props.children}</MovieListContext.Provider>
    )
}


