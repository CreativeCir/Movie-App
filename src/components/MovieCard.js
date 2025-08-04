import { Link } from 'react-router-dom';

const MovieCard = ({ movie, id }) => {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span>{movie.rating}/10</span>
      </div>
    </Link>
  );
};

export default MovieCard;