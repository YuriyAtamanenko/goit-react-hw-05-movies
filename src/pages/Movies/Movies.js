import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../../services/getFilmsAPI';

import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');

  const searchQuery = searchParams.get('query') ?? '';

  const handleFormSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (searchQuery === '') return;

    searchMovies(searchQuery)
      .then(data => {
        setSearchedMovies([...data.results]);
      })
      .catch(error => console.log(error));
  }, [searchQuery]);

  return (
    <section>
      <SearchForm onSubmit={handleFormSubmit} />
      {searchQuery && <MoviesList movies={searchedMovies} />}
    </section>
  );
};

export default Movies;
