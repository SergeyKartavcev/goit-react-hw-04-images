import axios from 'axios';
import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
const BASEURL = 'https://pixabay.com/api/';
axios.defaults.baseURL = BASEURL;
class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
  };



  getValue = data => {
     this.setState({ neme: data.name, pege: data.page, hits: [] });
    const { name, page } = data;
    const response = this.fetchApi(name, page);
    return response;
  };

  async fetchApi(name, page) {
    await axios
      .get('/', {
        params: {
          key: '29432649-8ecc53e09c3218583a5f8b5f1',
          q: name,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: 'true',
          per_page: 12,
          page: page,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { hits } = this.state;
  
    return (
      <div>
        <Searchbar onSubmitHandler={this.getValue} />
        {hits&&(<ImageGallery images={hits}/>)}
        
      </div>
    );
  }
}

export default App;
