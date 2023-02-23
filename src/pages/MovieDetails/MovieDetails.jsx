import React, { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { addMovieIDetails } from 'api.js';
import { Link, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import css from './MovieDetails.module.css';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const fromLocation = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);

        const data = await addMovieIDetails(movieId);
        setMovieDetails(data);
      } catch (error) {
        Notify.failure('Oooops, smth went wrong :(');
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();
  }, [movieId]);

  return (
    <>
      <div className={css.wraptop}>
        <Link to={fromLocation}>Go back</Link>
        {movieDetails && <MovieInfo movieDetails={movieDetails} />}

        {isLoading && <Loader />}
      </div>
      <div className={css.wrapbottom}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`} state={{ from: fromLocation }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: fromLocation }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
