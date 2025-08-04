import { useParams, Link } from 'react-router-dom';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies[Number(id)];

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-details">
      <Link to="/" className="back-button">← Back to Home</Link>
      <h1>{movie.title}</h1>
      <div className="video-container">
        <iframe 
          src={movie.trailerLink}
          title={`${movie.title} Trailer`}
          allowFullScreen
        ></iframe>
      </div>
      <div className="movie-info">
        <p><strong>Rating:</strong> {movie.rating}/10</p>
        <p><strong>Description:</strong></p>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;