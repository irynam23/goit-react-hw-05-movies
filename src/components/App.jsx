import React, { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
const Movies = lazy(() => import('../pages/Movies/Movies'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/movies">
            Movie
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
