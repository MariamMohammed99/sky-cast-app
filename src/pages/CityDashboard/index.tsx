import { useLocation } from 'react-router-dom';
import { CURRENT_WEATHER_URL, HISTORICAL_WEATHER_URL } from '../../app/services/constants';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import useFetchData from '../../hooks/useFetchData';
import { constructCurrentWeatherParams, constructHistoricalWeatherParams } from '../../common/utils/constructParams';
import { useEffect, useMemo } from 'react';
import Loading from '../../common/components/Loading';
import { BG_DAY_COLOR, BG_NIGHT_COLOR, LOADING_SIZE, WRONG_URL_ERROR_MESSAGE } from '../../common/constants';
import ErrorNotification from '../../common/components/ErrorNotification';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Table from './components/Table';
import { constructCityUrl } from '../../common/utils/constructCityUrl';
import locationAxiosInstance from '../../app/services/locationAxios';
import { PageProps } from '../interface';

const CityDashboardPage: React.FC<PageProps> = ({ setBackgroundColor }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get('latitude');
  const longitude = queryParams.get('longitude');

  const {
    data: cityLocationData,
    loading: loadingCity,
    error: errorCity,
  } = useFetchData(constructCityUrl(latitude, longitude), locationAxiosInstance, {
    params: {},
  });

  const weatherParams = useMemo(() => constructCurrentWeatherParams(latitude, longitude), [latitude, longitude]);

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

  console.log('city', cityLocationData);
  console.log('current', historyData);
  console.log('historical', historyData);

  const data = [
    { label: 'A', value: 30 },
    { label: 'B', value: 80 },
    { label: 'C', value: 45 },
    { label: 'D', value: 60 },
    { label: 'E', value: 20 },
    { label: 'F', value: 90 },
    { label: 'G', value: 55 },
  ];

  const temp = [
    { day: 'A', temp: 30 },
    { day: 'B', temp: 80 },
    { day: 'C', temp: 45 },
    { day: 'D', temp: 60 },
    { day: 'E', temp: 20 },
    { day: 'F', temp: 90 },
    { day: 'G', temp: 55 },
  ];

  const table = [
    { name: 'mariam', age: 24, city: 'october' },
    { name: 'ahmed', age: 25, city: 'hadayek' },
    { name: 'mama', age: 65, city: 'abdeen' },
    { name: 'baba', age: 75, city: 'haram' },
  ];

  if (!historyParams) return <ErrorNotification customizedError={WRONG_URL_ERROR_MESSAGE} />;
  if (errorHistory || errorCity || errorWeather) return <ErrorNotification />;

  if (loadingHistory || loadingCity || loadingWeather) return <Loading size={LOADING_SIZE} />;

  return (
    <>
      <h1>My D3 Bar Chart</h1>
      <BarChart data={data} />
      <h1>My D3 Line Chart</h1>
      <LineChart data={temp} />
      <h1>My D3 Table</h1>
      <Table data={table} />
    </>
  );
};

export default CityDashboardPage;
