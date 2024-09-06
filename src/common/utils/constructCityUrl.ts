import { GET_CITY_NAME_URL } from '../../app/services/constants';

export const constructCityUrl = (latitude: number | undefined, longitude: number | undefined): string => {
  if (!latitude || !longitude) return '';
  const latLng = longitude >= 0 ? `${latitude}+${longitude}` : `${latitude}${longitude}`;
  return GET_CITY_NAME_URL.replace('{{lat+long}}', latLng);
};
