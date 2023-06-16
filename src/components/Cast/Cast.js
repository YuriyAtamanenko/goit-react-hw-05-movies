import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/getFilmsAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(data => {
        setCast([...data.cast]);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ character, name, profile_path, id }) => (
        <li key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : 'https://content2.rozetka.com.ua/goods/images/big/260727842.jpg'
            }
            alt={name}
            width="150"
            heigth="225"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
