import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { HISTORICAL_WEATHER_URL } from '../../app/constants';
import locationAxiosInstance from '../../app/services/locationAxios';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import ErrorNotification from '../../common/components/ErrorNotification';
import Loading from '../../common/components/Loading';
import MainLocation from '../../common/components/MainLocation';
import { LOADING_SIZE, WRONG_URL_ERROR_MESSAGE } from '../../common/constants';
import { constructHistoricalWeatherParams } from '../../common/utils/constructParams';
import useFetchData from '../../hooks/useFetchData';
import useWeatherAndLocationFetch from '../../hooks/useWeatherLocationFetch';
import { PageProps } from '../interface';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import Table from './components/Table';
import { StyledDashboardContainer, StyledDashboardWrapper, StyledLocationWrapper } from './styled';

const CityDashboardPage: React.FC<PageProps> = ({ setBackgroundColor }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get('latitude');
  const longitude = queryParams.get('longitude');

  const { locationData, loadingCity, errorCity, weatherData, loadingWeather, errorWeather, isDayTime } =
    useWeatherAndLocationFetch({
      latitude,
      longitude,
      locationAxiosInstance,
      weatherAxiosInstance,
      setBackgroundColor,
    });

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

  console.log('city', locationData);
  console.log('current', weatherData);
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
    <StyledDashboardWrapper>
    <StyledDashboardContainer>
      <StyledLocationWrapper>
        <MainLocation location={locationData[0]} isDayTime={isDayTime} clickable={"false"} onClick={() => {}} />
      </StyledLocationWrapper>
      <h1>My D3 Bar Chart</h1>
      <BarChart data={data} />
      <h1>My D3 Line Chart</h1>
      <LineChart data={temp} />
      <h1>My D3 Table</h1>
      <Table data={table} />
    </StyledDashboardContainer>
    </StyledDashboardWrapper>
  );
};

export default CityDashboardPage;
