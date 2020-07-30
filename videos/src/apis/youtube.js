import axios from 'axios';

export const KEY = 'AIzaSyBqyBaDB-cH5f8-73NqgNUrAbuzk20vOfk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
});
