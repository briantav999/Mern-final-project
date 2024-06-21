// src/components/AddMovie.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addMovie } from '../services/movieService';

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    actors: '',
    rating: '',
    releaseDate: '',
    genre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newMovie = {
      ...movie,
      actors: movie.actors.split(',').map((actor) => actor.trim()),
      genre: movie.genre.split(',').map((genre) => genre.trim()),
    };
    try {
      await addMovie(newMovie);
      navigate('/');
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4 text-center anton-font">Add Movie</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={movie.title}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Director:</label>
              <input
                type="text"
                name="director"
                value={movie.director}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Actors (comma separated):</label>
              <input
                type="text"
                name="actors"
                value={movie.actors}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Rating:</label>
              <input
                type="number"
                name="rating"
                value={movie.rating}
                onChange={handleChange}
                className="form-control"
                min="1"
                max="10"
                required
              />
            </div>
            <div className="form-group">
              <label>Release Date:</label>
              <input
                type="date"
                name="releaseDate"
                value={movie.releaseDate}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label>Genre (comma separated):</label>
              <input
                type="text"
                name="genre"
                value={movie.genre}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>
            <div className="d-flex justify-content-between mt-3">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <Link to="/">
                <button type="button" className="btn btn-secondary">
                  Back to Movie List
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
