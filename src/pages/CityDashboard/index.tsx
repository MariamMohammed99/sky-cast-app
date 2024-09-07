import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { HISTORICAL_WEATHER_URL } from '../../app/constants';
import locationAxiosInstance from '../../app/services/locationAxios';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import ErrorNotification from '../../common/components/ErrorNotification';
import Loading from '../../common/components/Loading';
import MainLocation from '../../common/components/MainLocation';
import { DAY_COLOR, LOADING_SIZE, NIGHT_COLOR, TEMPERATURE, WRONG_URL_ERROR_MESSAGE } from '../../common/constants';
import { constructHistoricalWeatherParams } from '../../common/utils/constructParams';
import useFetchData from '../../hooks/useFetchData';
import useWeatherAndLocationFetch from '../../hooks/useWeatherLocationFetch';
import { PageProps } from '../interface';
import LineChart from './components/LineChart';
import {
  StyledChartHeader,
  StyledChartWrapper,
  StyledDashboardContainer,
  StyledDashboardWrapper,
  StyledForeCastWrapper,
  StyledLocationWrapper,
} from './styled';
import CurrentForecast from '../../common/components/CurrentForecast';
import { convertDate } from '../../common/utils/convertDate';
import { constructSummaryDetails } from '../../common/utils/constructSummaryDetails';
import { AvgWeather } from '../../common/interfaces';
import Table from './components/Table';
import { getDaysOfLastMonth } from '../../common/utils/constructMonthDays';

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
      singleDay: false,
      setBackgroundColor,
    });

  const { startDate, endDate } = useMemo(() => getDaysOfLastMonth(), []);

  const historyParams = useMemo(
    () =>
      startDate &&
      constructHistoricalWeatherParams(latitude, longitude, startDate.toDateString(), endDate.toDateString()),
    [latitude, longitude, startDate],
  );

  const {
    data: historyWeather,
    loading: loadingHistory,
    error: errorHistory,
  } = useFetchData(historyParams ? HISTORICAL_WEATHER_URL : '', weatherAxiosInstance, {
    params: historyParams,
  });

  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);

  const { weatherIconUrl, weatherDesc } = useMemo(() => {
    if (weatherData && weatherData.currentCondition) {
      return weatherData.currentCondition.isDayTime
        ? {
            weatherIconUrl: weatherData.weather[0].hourly[1].weatherIconUrl,
            weatherDesc: weatherData.weather[0].hourly[1].weatherDesc,
          }
        : {
            weatherIconUrl: weatherData.weather[0].hourly[0].weatherIconUrl,
            weatherDesc: weatherData.weather[0].hourly[0].weatherDesc,
          };
    }
    return { weatherIconUrl: '', weatherDesc: '' };
  }, [weatherData]);

  const weekWeather = useMemo(() => {
    if (weatherData) {
      return weatherData.weather.map((item: AvgWeather) => {
        return {
          date: item.date,
          maxTemp: TEMPERATURE.replace(`{{temp}}`, item.maxTempC),
          avgTemp: TEMPERATURE.replace(`{{temp}}`, item.avgTempC),
          minTemp: TEMPERATURE.replace(`{{temp}}`, item.minTempC),
        };
      });
    }
    return [];
  }, [weatherData]);

  const lastMonthWeather = useMemo(() => {
    if (historyWeather) {
      return historyWeather.weather.map((item: AvgWeather, index: number) => {
        return {
          day: index+1,
          temp: Number(item.avgTempC),
        };
      });
    }

    return [];
  }, [historyWeather]);

  if (!historyParams) return <ErrorNotification customizedError={WRONG_URL_ERROR_MESSAGE} />;
  if (errorHistory || errorCity || errorWeather) return <ErrorNotification />;

  if (loadingHistory || loadingCity || loadingWeather) return <Loading size={LOADING_SIZE} />;

  if (!weatherData || !historyWeather || !locationData) return null;

  return (
    <StyledDashboardWrapper>
      <StyledDashboardContainer>
        <StyledLocationWrapper>
          <MainLocation location={locationData[0]} isDayTime={isDayTime} clickable={'false'} onClick={() => {}} />
        </StyledLocationWrapper>
        <StyledForeCastWrapper>
          <CurrentForecast
            date={convertDate(weatherData.weather[0].date, true)}
            weekName={convertDate(weatherData.weather[0].date)}
            temp={TEMPERATURE.replace('{{temp}}', weatherData.currentCondition?.tempC)}
            feelsLike={TEMPERATURE.replace('{{temp}}', weatherData.currentCondition?.feelsLikeC)}
            image={weatherIconUrl}
            description={weatherDesc}
            isDayTime={weatherData.currentCondition?.isDayTime}
            summaryData={constructSummaryDetails(weatherData.currentCondition!)}
          ></CurrentForecast>

          <StyledChartWrapper style={{ backgroundColor }}>
            <StyledChartHeader>Temperature Over Week</StyledChartHeader>
            <Table data={weekWeather} />
          </StyledChartWrapper>
        </StyledForeCastWrapper>

        <StyledChartWrapper style={{ backgroundColor }}>
          <StyledChartHeader>Temperature Last Month</StyledChartHeader>
          <LineChart data={lastMonthWeather} />
        </StyledChartWrapper>
      </StyledDashboardContainer>
    </StyledDashboardWrapper>
  );
};

export default CityDashboardPage;
