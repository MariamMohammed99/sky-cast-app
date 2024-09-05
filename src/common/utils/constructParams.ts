import { SearchParams } from '../interfaces';

export const constructCurrentWeatherParams = (
  latitude: number | undefined,
  longitude: number | undefined,
  days: number,
) => {
  if (!latitude || !longitude) return null;
  return {
    showlocaltime: 'yes',
    showmap: 'yes',
    tp: 1,
    q: `${latitude},${longitude}`,
    num_of_days: days,
  };
};

export const constructSearchParams = (
  latitude: number | undefined,
  longitude: number | undefined,
): SearchParams | null => {
  if (!latitude || !longitude) return null;
  return {
    namePrefix: 'ca',
    limit: 3,
    countryIds: 'eg',
  };
};
