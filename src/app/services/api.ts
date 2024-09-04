import axios from 'axios';
import { API_KEY, WEATHER_BASE_URL,  REQUEST_FORMAT } from '../constants';

const axiosInstance = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    key: API_KEY,
    format: REQUEST_FORMAT,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default axiosInstance;
