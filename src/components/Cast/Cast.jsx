import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getCast } from 'api';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { CastItem } from 'components/CastItem/CastItem';

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
            <CastItem
              key={actor.id + index}
              name={actor.name}
              character={actor.character}
              picture={actor.profile_path}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;
