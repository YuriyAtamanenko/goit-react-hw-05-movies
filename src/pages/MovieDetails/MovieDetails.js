import { useState, useEffect, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../services/getFilmsAPI';
import {
  HeadInfo,
  StyledLink,
  ListItem,
  GoBack,
  Section,
} from './MovieDetalis.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => setError(true));
  }, [movieId]);

  const getGeners = geners => {
    return geners.map(gener => gener.name).join(', ');
  };

  const getYear = data => {
    if (data) return data.split('').slice(0, 4).join('');
  };

  return (
    <Section>
      <GoBack to={goBackLocationRef.current}>&#10094; Go back</GoBack>
      {movie && (
        <div>
          <HeadInfo>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                  : 'https://via.placeholder.com/278x417?text=Poster+Not+Found'
              }
              alt={movie.title || movie.name}
              width="250"
              height="375"
            ></img>
            <div>
              <h1>
                {movie.title || movie.name} ({getYear(movie.release_date)})
              </h1>
              <p>User score: {Math.floor(movie.vote_average * 10)}%</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres && getGeners(movie.genres)}</p>
            </div>
          </HeadInfo>
          <div>
            <h4>Additional information</h4>
            <ul>
              <ListItem>
                <StyledLink to="cast">Cast</StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink to="reviews">Rewiews</StyledLink>
              </ListItem>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
      {error && <p>OOPS!!! We don't have details about this movie</p>}
    </Section>
  );
};

export default MovieDetails;
