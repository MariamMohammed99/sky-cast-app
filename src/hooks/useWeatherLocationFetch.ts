import { useMemo, useEffect } from 'react';
import useFetchData from './useFetchData';
import { constructCityUrl } from '../common/utils/constructCityUrl';
import { constructCurrentWeatherParams } from '../common/utils/constructParams';
import { CURRENT_WEATHER_URL } from '../app/constants';
import { BG_DAY_COLOR, BG_NIGHT_COLOR } from '../common/constants';
import { UseWeatherAndLocationProps } from '../common/interfaces';

const useWeatherLocationFetch = ({
  latitude,
  longitude,
  locationAxiosInstance,
  weatherAxiosInstance,
  setBackgroundColor,
}: UseWeatherAndLocationProps) => {

  const locationUrl = useMemo(() => constructCityUrl(latitude, longitude), [latitude, longitude]);

  const weatherParams = useMemo(() => constructCurrentWeatherParams(latitude, longitude), [latitude, longitude]);

  const {
    data: locationData,
    loading: loadingCity,
    error: errorCity,
  } = useFetchData(locationUrl, locationAxiosInstance, { params: {} });

  const {
    data: weatherData,
    loading: loadingWeather,
    error: errorWeather,
  } = useFetchData(weatherParams ? CURRENT_WEATHER_URL : '', weatherAxiosInstance, {
    params: weatherParams,
  });

  const isDayTime = useMemo(() => weatherData?.currentCondition?.isDayTime, [weatherData]);

  useEffect(() => {
    if (weatherData) {
      if (isDayTime) {
        setBackgroundColor(BG_DAY_COLOR);
      } else {
        setBackgroundColor(BG_NIGHT_COLOR);
      }
    }
  }, [weatherData, isDayTime, setBackgroundColor]);
  

  return {
    locationData,
    loadingCity,
    errorCity,
    weatherData,
    loadingWeather,
    errorWeather,
    isDayTime
  };
};

export default useWeatherLocationFetch;
