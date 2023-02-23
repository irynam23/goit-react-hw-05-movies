import css from './MovieInfo.module.css';
import imageNotFound from 'images/imageNotFound.jpeg';

export const MovieInfo = ({ movieDetails }) => {
  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieDetails;
  const poster = poster_path
    ? 'https://image.tmdb.org/t/p/w500' + poster_path
    : imageNotFound;
  const release = release_date.split('-')[0];
  const score = Math.round(vote_average * 10);
  const genresList = genres.map(({ name }) => name).join(', ');
  return (
    <div className={css.movieItem}>
      <img alt="movie" src={poster} loading="lazy" height="400" />
      <div>
        <h2>
          {title} ({release})
        </h2>
        <p>User Score: {score}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genresList}</p>
      </div>
    </div>
  );
};
