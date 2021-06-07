import React, {useState, useContext} from 'react';
import {MovieListContext} from '../MovieListContext';

const AddMovies = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieListContext);

    function setNameHandler(e) {
        setName(e.target.value);
    }
    function setPriceHandler(e) {
        setPrice(e.target.value);
    }

    function addMovieHandler() {
        setMovies( prevMovies => [...prevMovies, {name: name, price: price}])
        setName('');
        setPrice('');
    }

    return (
        <div>
            <input type="text" onChange={setNameHandler} value={name} />        
            <input type="text" onChange={setPriceHandler} value={price}/>        
            <button onClick={addMovieHandler}>Submit</button>
        </div>
    )
}

export default AddMovies
