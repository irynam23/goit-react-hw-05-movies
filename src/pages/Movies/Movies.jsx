import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from './Movies.module.css';
import { getByName } from 'api';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    (async () => {
      if (!searchQuery) return;
      try {
        setIsLoading(true);
        const response = await getByName(searchQuery);
        setMovies(response);
      } catch (error) {
        Notify.failure('Oooops, smth went wrong :(');
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  const onSubmit = async e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();
    if (!query || query === searchQuery) return;
    setSearchParams({ search: query });
  };

  return (
    <div className={css.wrap}>
      <form onSubmit={onSubmit}>
        <input
          className={css.input}
          type="text"
          placeholder="Enter name of movie..."
          name="query"
        />

        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  state={{
                    from: location,
                  }}
                  to={`/movies/${movie.id}`}
                >
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
export default Movies;
