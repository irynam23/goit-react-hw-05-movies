import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getReviews } from 'api';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchReviews(movieId) {
    try {
      setIsLoading(true);

      const { results } = await getReviews(movieId);

      setReviews(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (movieId === null) return;

    fetchReviews(movieId);
  }, [movieId]);
  console.log(reviews);
  return (
    <div>
      {isLoading && <Loader />}
      {error !== null && <p>We don't have any reviews for this movie</p>}
      {reviews !== null && (
        <div>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
