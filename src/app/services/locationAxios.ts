import axios, { AxiosResponse } from 'axios';
import { LIMIT_GET_CITY_NAME, LOCATION_BASE_URL } from './constants';
import { LocationData } from '../../common/interfaces';

const transformResponse = (response: AxiosResponse) => {
  const { data } = response.data;

  const transformedData = data.map((item: LocationData) => ({
    city: item.city,
    country: item.country,
    countryCode: item.countryCode,
    region: item.region,
    longitude: item.longitude,
    latitude: item.latitude,
  }));

  return { ...response, data: transformedData };
};

const locationAxiosInstance = axios.create({
  baseURL: LOCATION_BASE_URL,
  params: {
    limit: LIMIT_GET_CITY_NAME,
  },
});

locationAxiosInstance.interceptors.response.use(
  (response) => transformResponse(response),
  (error) => Promise.reject(error),
);

export default locationAxiosInstance;
