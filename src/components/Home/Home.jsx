import React, { useEffect, useState } from 'react';
import { getPopular } from 'api.js';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

export function Home() {
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
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {movies &&
        movies.map(movie => {
          return (
            <Link to={`/posts/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          );
        })}
      {isLoading && <Loader />}
    </div>
  );
}

export default Home;
