import React from 'react';
import PropTypes from 'prop-types';
import S from './SearchForm.module.css';
import { useState } from 'react';

function SearchFrom ({ onSearch }) {

  const [query, setQuery] = useState('');

 const handleSearchInput = e => {
  const { value } = e.currentTarget;

  setQuery(value);
  };

 const handleSubmit = e => {
    e.preventDefault();

    if (!query) return;

    onSearch(query);

    resetForm();
  };

 const resetForm = () =>
 setQuery('');

  
    return (
      <form onSubmit={handleSubmit} className={S.SearchForm}>
        <button type="submit" className={S.SearchForm_button}>
          <span>Search</span>
        </button>

        <input
          className={S.SearchForm_input}
          type="text"
          name="query"
          value={query}
          onChange={handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;
