import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const FetchApi = async (query, currentPage) => {
  const { data } = await axios.get(
    `/?q=${query}&page=${currentPage}&key=29432649-8ecc53e09c3218583a5f8b5f1&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};

export default FetchApi;
