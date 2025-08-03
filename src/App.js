import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: 8.8
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      rating: 9.3
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham.",
      posterURL: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: 9.0
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
    );
  });

  return (
    <div className="app">
      <h1>My Favorite Movies</h1>
      <Filter 
        filterTitle={filterTitle} 
        setFilterTitle={setFilterTitle}
        filterRating={filterRating}
        setFilterRating={setFilterRating}
      />
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

 export default App;