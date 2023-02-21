import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import MovieDetails from './MovieDetails/MovieDetails';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/movie">
            Movie
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        {/* /* // <Route path="/movies" element={<Movies />} /> */}

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
