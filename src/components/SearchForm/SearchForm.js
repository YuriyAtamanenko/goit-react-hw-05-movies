import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Submit } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const currentSearchQuery = e.currentTarget.text.value.toLowerCase().trim();

    if (currentSearchQuery === '') {
      alert('Enter the name of the movie in the search field');
    } else {
      onSubmit(currentSearchQuery);
    }
    setSearchQuery('');
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        onChange={e => {
          setSearchQuery(e.currentTarget.value);
        }}
        value={searchQuery}
        type="text"
        name="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      ></Input>
      <Submit type="submit">Search</Submit>
    </Form>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
