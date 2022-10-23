import React, { Component } from 'react';
import PropTypes from 'prop-types';
import S from './SearchForm.module.css';

class SearchFrom extends Component {
  state = {
    query: '',
  };

  handleSearchInput = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.query) return;

    this.props.onSearch(this.state.query);

    this.resetForm();
  };

  resetForm = () =>
    this.setState({
      query: '',
    });

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={S.SearchForm}>
        <button type="submit" className={S.SearchForm_button}>
          <span>Search</span>
        </button>

        <input
          className={S.SearchForm_input}
          type="text"
          name="query"
          value={this.state.query}
          onChange={this.handleSearchInput}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

SearchFrom.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchFrom;
