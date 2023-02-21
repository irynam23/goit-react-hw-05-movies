import React, { useEffect, useState } from 'react';
import { getPopular } from 'api.js';
import { Link } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <h3>{movie.title}</h3>
                </Link>
              </li>
            );
          })}
      </ul>
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
