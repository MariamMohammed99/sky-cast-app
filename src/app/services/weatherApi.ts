import axios from 'axios';
import { API_KEY, WEATHER_BASE_URL, REQUEST_FORMAT } from '../constants';
import { Weather } from '../../common/interfaces';
import { transformAvgWeather, transformCurrentCondition } from './utils/transformWeatherResponse';

const transformResponse = (rawData: string) => {
  const parsedResponse = JSON.parse(rawData);
  const { data } = parsedResponse;

  const transformedData: Weather = {
    currentCondition: data.current_condition ? transformCurrentCondition(data.current_condition[0]) : undefined,
    weather: data.weather.map(transformAvgWeather),
  };

  return transformedData;
};

const weatherAxiosInstance = axios.create({
  baseURL: WEATHER_BASE_URL,
  params: {
    key: API_KEY,
    format: REQUEST_FORMAT,
  },
  transformResponse,
});

weatherAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default weatherAxiosInstance;
