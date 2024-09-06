import { useLocation } from 'react-router-dom';
import { HISTORICAL_WEATHER_URL } from '../../app/services/constants';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import useFetchData from '../../hooks/useFetchData';
import { constructHistoricalWeatherParams } from '../../common/utils/constructParams';
import { useMemo } from 'react';

const CityDashboardPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get('latitude');
  const longitude = queryParams.get('longitude');

  const historyParams = useMemo(
    () => constructHistoricalWeatherParams(latitude, longitude, 'today'),
    [latitude, longitude],
  );
  const {
    data: historyData,
    loading: loadingHistory,
    error: errorHistory,
  } = useFetchData(historyParams ? HISTORICAL_WEATHER_URL : '', weatherAxiosInstance, {
    params: historyParams,
  });
  console.log('data', historyData);
  console.log('loading', loadingHistory);
  console.log('error', errorHistory);

  return <div>CityWeatherDashboardPage</div>;
};

export default CityDashboardPage;
