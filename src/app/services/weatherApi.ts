import axios, { AxiosResponse } from 'axios';
import { API_KEY, WEATHER_BASE_URL, REQUEST_FORMAT, CURRENT_WEATHER_URL } from '../constants';

const transformResponse = (response: AxiosResponse) => {
  if (response.config.url === CURRENT_WEATHER_URL) {
    const data = response.data.data;
    return { ...response, data };
  } 
   else {
    const data = response.data.data;
    return { ...response, data };
  }
};

const weatherAxiosInstance = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    key: API_KEY,
    format: REQUEST_FORMAT,
  },
});

weatherAxiosInstance.interceptors.response.use(
  (response) => transformResponse(response),
  (error) => Promise.reject(error),
);

export default weatherAxiosInstance;
