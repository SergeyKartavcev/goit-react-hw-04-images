import SearchFrom from './SearchForm/SearchForm';
import React from 'react';
import PropTypes from 'prop-types';
import S from './SearchBar.module.css'


const Searchbar = ({ onSearch }) => (
  <header className={S.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
