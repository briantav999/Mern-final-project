// src/components/MovieList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../services/movieService';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMovies();
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="my-4 text-center anton-font">Movie List</h1>
      <div className="d-flex justify-content-center mb-4">
        <Link to="/add" className="btn btn-primary anton-font">
          Add Movie
        </Link>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {movies.map((movie) => (
              <li key={movie._id} className="list-group-item anton-font">
                <Link to={`/movies/${movie._id}`} className="anton-font">{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
