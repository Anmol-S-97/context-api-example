import './App.css';
import AddMovies from './components/AddMovies';
import MovieList from './components/MovieList';
import {MovieProvider} from './MovieListContext';

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieList />
        <AddMovies />
      </MovieProvider>
    </div>
  );
}

export default App;
