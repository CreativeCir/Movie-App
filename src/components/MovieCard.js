import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.rating}/10</span>
      </div>
      <div className="movie-description">
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;