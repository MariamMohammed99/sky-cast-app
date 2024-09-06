import axios from 'axios';
import { LIMIT_GET_CITY_NAME, LOCATION_BASE_URL } from './constants';
import { LocationData, LocationRespone } from '../../common/interfaces';

const transformResponse = (rawData: string) => {
  const parsedResponse: LocationRespone = JSON.parse(rawData);
  const { data } = parsedResponse;

  const transformedData = data.map((item: LocationData) => ({
    city: item.city,
    country: item.country,
    countryCode: item.countryCode,
    region: item.region,
    longitude: item.longitude,
    latitude: item.latitude,
  }));

  return transformedData;
};

const locationAxiosInstance = axios.create({
  baseURL: LOCATION_BASE_URL,
  params: {
    limit: LIMIT_GET_CITY_NAME,
  },
  transformResponse,
});

locationAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export default locationAxiosInstance;
