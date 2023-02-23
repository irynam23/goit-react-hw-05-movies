import React, { useEffect, useState } from 'react';
import { getPopular } from 'api.js';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);

        const { results } = await getPopular();

        setMovies(results);
      } catch (error) {
        Notify.failure('Oooops, smth went wrong :(');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {movies?.length && <MoviesList movies={movies} location={location} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
