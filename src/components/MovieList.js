import React from 'react';
import { useSelector } from 'react-redux';
import MovieItem from './MovieItem';
import moviesData from '../data/movies.json';
import '../App.css';


const MovieList = () => {
  const searchTerm = useSelector((state) => state.searchTerm);

  // Filter movies based on the search term
  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list">
      <h2>Search Results</h2>
      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
