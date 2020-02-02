import axios from 'axios';

const api = axios.create({
  baseURL: "https://server-lrfisio.herokuapp.com/"
});

export default api;