import { LIMIT_SEARCH_RESULTS } from '../../app/constants';
import { SearchRequestParams } from '../interfaces';

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
): SearchRequestParams | null => {
  if (!latitude || !longitude) return null;
  return {
    namePrefix: 'ca',
    limit: LIMIT_SEARCH_RESULTS,
    countryIds: 'eg',
  };
};