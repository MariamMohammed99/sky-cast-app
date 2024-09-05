import axios from 'axios';
import { LOCATION_BASE_URL } from '../constants';
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
  transformResponse,
});

locationAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

// export const getLocationData = async (params: SearchParams) => {
//   try {
//     const response = await locationAxiosInstance.get(SEARCH_CITY_URL+'i', { params });
//     return response.data;
//   } catch (error as Error) {
//     console.error('Error fetching location data:', error.message);
//     throw error;
//   }
// };

export default locationAxiosInstance;
