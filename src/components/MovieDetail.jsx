// src/components/MovieDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getMovie, deleteMovie } from '../services/movieService';

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovie(id);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMovie(id);
      navigate('/');
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="d-flex flex-column align-items-center my-4">
        <h1>{movie.title}</h1>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()}</p>
        <p><strong>Genre:</strong> {movie.genre.join(', ')}</p>
        <div className="d-flex justify-content-center mb-4">
          <Link to={`/movies/${id}/edit`} className="btn btn-warning mr-1">
            Edit
          </Link>
          <button onClick={handleDelete} className="btn btn-danger mx-1">
            Delete
          </button>
          <Link to="/" className="btn btn-secondary ml-1">
            Back to Movie List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
