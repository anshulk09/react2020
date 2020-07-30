import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Ojp8dDbP4dciPwWHiqbXth_21358MbgtzSE5uvCrEi8',
  },
});
