import { useEffect, useMemo } from 'react';
import { CURRENT_WEATHER_URL } from '../../app/services/constants';
import locationAxiosInstance from '../../app/services/locationAxios';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import ErrorNotification from '../../common/components/ErrorNotification';
import Loading from '../../common/components/Loading';
import { BG_DAY_COLOR, BG_NIGHT_COLOR, LOADING_SIZE } from '../../common/constants';
import { AvgWeather } from '../../common/interfaces';
import { constructCityUrl } from '../../common/utils/constructCityUrl';
import { constructCurrentWeatherParams } from '../../common/utils/constructParams';
import { convertDate } from '../../common/utils/convertDate';
import useFetchData from '../../hooks/useFetchData';
import useGeolocation from '../../hooks/useGeolocation';
import DailyForecast from './components/DailyForecast';
import MainHeading from './components/MainHeading';
import { PageProps } from '../interface';
import { StyledLandingContainer, StyledLandingWrapper, StyledTemperatureContainer } from './styled';

const LandingDisplayPage: React.FC<PageProps> = ({ setBackgroundColor }) => {
  const { coordinates, geolocationError, loadingGeolocation, permissionDenied } = useGeolocation();

  const {
    data: userLocationData,
    loading: loadingUserCity,
    error: errorUserCity,
  } = useFetchData(constructCityUrl(coordinates?.latitude, coordinates?.longitude), locationAxiosInstance, {
    params: {},
  });

  const weatherParams = useMemo(
    () => constructCurrentWeatherParams(coordinates?.latitude, coordinates?.longitude),
    [coordinates],
  );

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

  if (geolocationError && permissionDenied) return <ErrorNotification locationPermissionDenied={permissionDenied} />;

  if (geolocationError || errorUserCity || errorWeather) return <ErrorNotification />;

  if (loadingGeolocation || loadingUserCity || loadingWeather) return <Loading size={LOADING_SIZE} />;

  if (!coordinates || !userLocationData || !weatherData) return null;

  return (
    <StyledLandingWrapper>
      <StyledLandingContainer>
        <MainHeading
          userLocation={userLocationData}
          weatherData={weatherData}
          latitude={coordinates!.latitude}
          longitude={coordinates!.longitude}
        />
        <StyledTemperatureContainer>
          {weatherData.weather.slice(1).map((item: AvgWeather, index: number) => (
            <DailyForecast
              key={index}
              day={convertDate(item.date)}
              avgTemp={item.avgTempC}
              image={isDayTime ? item.hourly[1].weatherIconUrl : item.hourly[0].weatherIconUrl}
              description={isDayTime ? item.hourly[1].weatherDesc : item.hourly[0].weatherDesc}
              isDayTime={isDayTime}
            />
          ))}
        </StyledTemperatureContainer>
      </StyledLandingContainer>
    </StyledLandingWrapper>
  );
};

export default LandingDisplayPage;
