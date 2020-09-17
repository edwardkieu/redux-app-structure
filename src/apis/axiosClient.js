import axios from 'axios';
import { toast } from 'react-toastify';
import queryString from 'query-string';

// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api', //process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  async (config) => {
    // Handle token here ...
    const token = window.localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const { status, data } = error.response;
    // Handle errors
    if (error.message === 'Network Error' && !error.response) {
      //alert("Network error - make sure API is running!");
      toast.error('Network error - make sure API is running!');
    }
    if (status === 404 || status === 400) {
      try {
        if (!data.success) {
          toast.error(data.message || data.errors);
        }
      } catch {}
    }
    if (status === 409) {
      try {
        if (!data.success) {
          toast.error(data.message);
          return;
        }
      } catch {}
    }
    throw error;
  }
);

export default axiosClient;
