import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movie">Movie</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* // <Route path="/movies" element={<Movies />} />
        // <Route path="/movies/:movieId" element={<MovieDetails />} />
        // <Route path="/movies/:movieId/cast" element={<Cast />} />
        // <Route path="/movies/:movieId/reviews" element={<Reviews />} /> */}
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
