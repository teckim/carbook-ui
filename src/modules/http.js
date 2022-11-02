import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/v1';

const http = axios.create({ baseURL: API_BASE_URL });

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem('user');
      localStorage.removeItem('jwt');
      window.location = '/login';
    }

    return Promise.reject(error);
  },
);

export default http;
