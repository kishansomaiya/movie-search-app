import React from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.releaseYear}</p>
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieItem;
