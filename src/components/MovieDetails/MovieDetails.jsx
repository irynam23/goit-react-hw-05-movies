import React, { Fragment, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { addMovieIDetails } from 'api.js';
import { Link, useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Notify } from 'notiflix';
import css from './MovieDetails.module.css';
import Reviews from 'components/Reviews/Reviews';
import Cast from 'components/Cast/Cast';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

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
  console.log(movieDetails);
  return (
    <>
      <div className={css.wraptop}>
        <Link to="/">Go back</Link>
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
            <Link to={`cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default MovieDetails;
