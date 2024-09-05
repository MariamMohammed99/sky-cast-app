import {
  EXTRA_PARAMS_WEATHER,
  HOURLY_TIME_INTERVAL,
  LIMIT_SEARCH_RESULTS,
  AVG_TIME_INTERVAL,
  WEATHER_DAYS_NO,
} from '../../app/constants';
import { SearchRequestParams } from '../interfaces';

export const constructCurrentWeatherParams = (
  latitude: number | string | undefined | null,
  longitude: number | string | undefined | null,
  monthlyAvg?: boolean,
) => {
  if (!latitude || !longitude) return null;
  const canBeConverted = !isNaN(Number(latitude)) && !isNaN(Number(longitude));
  if (!canBeConverted) return null;
  const mca = monthlyAvg ? 'yes' : 'no';
  return {
    tp: AVG_TIME_INTERVAL,
    q: `${latitude},${longitude}`,
    num_of_days: WEATHER_DAYS_NO,
    mca,
    extra: EXTRA_PARAMS_WEATHER,
  };
};

export const constructHistoricalWeatherParams = (
  latitude: string | null,
  longitude: string | null,
  startDate: string,
  endDate?: string,
) => {
  if (!latitude || !longitude) return null;
  const canBeConverted = !isNaN(Number(latitude)) && !isNaN(Number(longitude));
  if (!canBeConverted) return null;
  return {
    tp: HOURLY_TIME_INTERVAL,
    q: `${latitude},${longitude}`,
    date: startDate,
    enddate: endDate,
  };
};

export const constructSearchParams = (countryCode: string, searchPrefix: string): SearchRequestParams | null => {
  return {
    namePrefix: searchPrefix,
    limit: LIMIT_SEARCH_RESULTS,
    countryIds: countryCode,
  };
};
