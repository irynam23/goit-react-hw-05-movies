import axios from 'axios';

export const getPopular = async () => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=004aa31770cc2729c6dd319813b8b5dc&page=1`
  );

  return data;
};

export const addMovieIDetails = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=004aa31770cc2729c6dd319813b8b5dc`
  );
  return data;
};

export const getReviews = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=004aa31770cc2729c6dd319813b8b5dc`
  );

  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=004aa31770cc2729c6dd319813b8b5dc`
  );

  return data;
};

export const getByName = async query => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=004aa31770cc2729c6dd319813b8b5dc&query=${query}`
  );

  return data.results;
};
