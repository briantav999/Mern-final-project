// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import EditMovie from './components/EditMovie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="background">
        <div className="background-content">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/movies/:id/edit" element={<EditMovie />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
