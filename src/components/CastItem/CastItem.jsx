import imageNotFound from 'images/imageNotFound.jpeg';

export const CastItem = ({ name, character, picture }) => {
  const profilePic = picture
    ? 'https://image.tmdb.org/t/p/w500' + picture
    : imageNotFound;
  return (
    <li>
      <img alt="movie" src={profilePic} loading="lazy" height="300" />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
