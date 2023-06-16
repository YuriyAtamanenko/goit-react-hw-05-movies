import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMovies } from '../../services/getFilmsAPI';
import { Form, Input, Submit, StyledLink, List } from './Movies.styles';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query') ?? '';

  const handleFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.text.value });
  };

  useEffect(() => {
    if (searchQuery === '') return;

    searchMovies(searchQuery).then(data => {
      setSearchedMovies([...data.results]);
    });
  }, [searchQuery]);

  return (
    <section>
      <Form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        ></Input>
        <Submit type="submit">Search</Submit>
      </Form>

      {searchQuery && (
        <ul>
          {searchedMovies.map(movie => {
            return (
              <List key={movie.id}>
                <StyledLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.title || movie.name}
                </StyledLink>
              </List>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Movies;
