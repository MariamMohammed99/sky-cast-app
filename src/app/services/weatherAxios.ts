import axios, { AxiosResponse } from 'axios';
import { API_KEY, WEATHER_BASE_URL, REQUEST_FORMAT } from './constants';
import { transformAvgWeather, transformCurrentCondition } from './utils/transformWeatherResponse';

const transformResponse = (response: AxiosResponse) => {
  const { data } = response.data;

  const transformedData = {
    currentCondition: data.current_condition ? transformCurrentCondition(data.current_condition[0]) : undefined,
    weather: data.weather.map(transformAvgWeather),
  };

  return {
    ...response,
    data: transformedData,
  };
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
