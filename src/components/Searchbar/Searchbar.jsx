import React, { Component } from 'react';
import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';

class Searchbar extends Component {
    state = {
        name: '',
        page: 1,
    }

    handleChange = e => {
        const { value } = e.currentTarget;
        console.log(value);

        this.setState({ name: value })
    }

    handleSubmit = e => {
        e.preventDefault();

        if(this.state.name.trim() === '') {
            toast.error('Пожалуйста введите поисковое слово.');
            return;
        }

        this.props.onSubmitHandler(this.state);

        this.reset();
    }

    reset() {
        this.setState({ name: '' });
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          name="query"
          value={this.state.query}
           onChange={this.handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}

//  Searchbar.propTypes = {
//     onSubmitHandler: PropTypes.func.isRequired,
//      };

export default Searchbar;
