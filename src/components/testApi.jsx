// src/components/testApi.js
import React, { useEffect } from 'react';
import { getMovies, getMovie, addMovie, updateMovie, deleteMovie } from '../services/movieService';

const TestApiComponent = () => {
  useEffect(() => {
    const testApi = async () => {
      try {
        // Test adding a new movie
        const newMovie = {
          title: 'Test Movie',
          director: 'Test Director',
          actors: ['Test Actor 1', 'Test Actor 2'],
          rating: 7.5,
          releaseDate: '2024-01-01T00:00:00.000Z',
          genre: ['Drama', 'Thriller']
        };
        const addedMovie = await addMovie(newMovie);
        console.log('Added movie:', addedMovie.data);

        // Test getting all movies
        const movies = await getMovies();
        console.log('Movies:', movies.data);

        // Test getting a single movie by ID
        const movie = await getMovie(addedMovie.data._id);
        console.log('Fetched movie:', movie.data);

        // Test updating a movie
        const updatedMovie = {
          title: 'Updated Test Movie',
          director: 'Updated Test Director',
          actors: ['Updated Test Actor 1', 'Updated Test Actor 2'],
          rating: 8.5,
          releaseDate: '2024-02-01T00:00:00.000Z',
          genre: ['Comedy', 'Action']
        };
        const updated = await updateMovie(addedMovie.data._id, updatedMovie);
        console.log('Updated movie:', updated.data);

        // Test deleting a movie
        await deleteMovie(addedMovie.data._id);
        console.log('Deleted movie:', addedMovie.data._id);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    testApi();
  }, []);

  return (
    <div>
      <h1>Testing API</h1>
    </div>
  );
};

export default TestApiComponent;
