import SearchFrom from 'components/SearchForm/SearchForm';
import React from 'react';

import S from './SearchBar.module.css';

const Searchbar = ({ onSearch }) => (
  <header className={S.Searchbar}>
    <SearchFrom onSearch={onSearch} />
  </header>
);



export default Searchbar;
