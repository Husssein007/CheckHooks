import React from 'react'


const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <img src={movie.posterURL} alt={`${movie.title} poster`} />
        <p>Rating: {movie.rating}</p>
      </div>
    );
  };
  
  export default MovieCard;