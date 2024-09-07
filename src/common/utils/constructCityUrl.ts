import { GET_CITY_NAME_URL } from '../../app/constants';

export const constructCityUrl = (
  latitude: number | undefined | string | null,
  longitude: number | undefined | string | null,
): string => {
  if (!latitude || !longitude) return '';
  const canBeConverted = !isNaN(Number(latitude)) && !isNaN(Number(longitude));
  if (!canBeConverted) return '';
  const latLng = Number(longitude) >= 0 ? `${latitude}+${longitude}` : `${latitude}${longitude}`;
  return GET_CITY_NAME_URL.replace('{{lat+long}}', latLng);
};
