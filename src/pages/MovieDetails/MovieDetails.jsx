import React, { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { addMovieIDetails } from 'api.js';
import { Link, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import css from './MovieDetails.module.css';
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

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
        <Link to={location.state?.from ?? '/'}>Go back</Link>
        {movieDetails && (
          <div className={css.movieItem}>
            <img
              className={css.movieItemImg}
              alt="movie"
              src={'https://image.tmdb.org/t/p/w500' + movieDetails.poster_path}
              loading="lazy"
              height="400"
            />
            <div className={css.movieItemInfo}>
              <h2 className={css.movieItemTitle}>
                {movieDetails.title} ({movieDetails.release_date.split('-')[0]})
              </h2>
              <p className={css.movieItemDetails}>
                User Score: {Math.round(movieDetails.vote_average * 10)}%
              </p>
              <h3 className={css.movieItemName}>Overview</h3>
              <p className={css.movieItemDetails}>{movieDetails.overview}</p>
              <h4 className={css.movieItemName}>Genres</h4>
              <p className={css.movieItemDetails}>
                {movieDetails.genres.map(({ name }) => name).join(', ')}
              </p>
            </div>
          </div>
        )}

        {isLoading && <Loader />}
      </div>
      <div className={css.wrapbottom}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`cast`} state={{ from: location.state?.from ?? '/' }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: location.state?.from ?? '/' }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default MovieDetails;
