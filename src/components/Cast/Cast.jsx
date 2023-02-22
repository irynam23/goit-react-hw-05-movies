import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getCast } from 'api';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchCast(movieId) {
    try {
      setIsLoading(true);

      const { cast: movieCast } = await getCast(movieId);

      setCast(movieCast);
    } catch (error) {
      Notify.failure('Oooops, smth went wrong :(');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (movieId === null) return;

    fetchCast(movieId);
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {cast !== null && (
        <div>
          {cast.map((actor, index) => (
            <li key={actor.id + index}>
              <img
                alt="movie"
                src={'https://image.tmdb.org/t/p/w500' + actor.profile_path}
                loading="lazy"
                height="300"
              />
              <p>{actor.name}</p>
              <p>{actor.character}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;
