import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { StyledLink, List } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => {
        return (
          <List key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </StyledLink>
          </List>
        );
      })}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
