import axios from 'axios';

const API_URL = 'http://localhost:5000/api/movies';

export const getMovies = () => {
  return axios.get(API_URL);
};

export const getMovie = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const addMovie = (movie) => {
  return axios.post(API_URL, movie);
};

export const updateMovie = (id, movie) => {
  return axios.put(`${API_URL}/${id}`, movie);
};

export const deleteMovie = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
