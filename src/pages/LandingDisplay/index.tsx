import { useEffect, useMemo } from 'react';
import { CURRENT_WEATHER_URL } from '../../app/services/constants';
import locationAxiosInstance from '../../app/services/locationAxios';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import { AvgWeather } from '../../common/interfaces';
import { constructCityUrl } from '../../common/utils/constructCityUrl';
import { constructCurrentWeatherParams } from '../../common/utils/constructParams';
import useFetchData from '../../hooks/useFetchData';
import useGeolocation from '../../hooks/useGeolocation';
import DailyForecast from './components/DailyForecast';
import { StyledLandingContainer, StyledLandingWrapper, StyledTemperatureContainer } from './styled';
import { convertDate } from '../../common/utils/convertDate';
import { LandingDisplayPageProps } from './interface';
import { BG_DAY_COLOR, BG_NIGHT_COLOR, LOADING_SIZE } from '../../common/constants';
import MainHeading from './components/MainHeading';
import Loading from '../../common/components/Loading';
import ErrorNotification from '../../common/components/ErrorNotification';

const LandingDisplayPage: React.FC<LandingDisplayPageProps> = ({ setBackgroundColor }) => {
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

  useEffect(() => {
    if (weatherData && weatherData.currentCondition) {
      if (weatherData.currentCondition?.isDayTime) {
        setBackgroundColor(BG_DAY_COLOR);
      } else {
        setBackgroundColor(BG_NIGHT_COLOR);
      }
    }
  }, [weatherData, setBackgroundColor]);


  if (geolocationError && permissionDenied) return <ErrorNotification locationPermissionDenied={permissionDenied} />;

  if (geolocationError || errorUserCity || errorWeather) return <ErrorNotification />;
  
  if (loadingGeolocation || loadingUserCity || loadingWeather) return <Loading size={LOADING_SIZE} />;

  console.log("coordinates", coordinates)
  console.log("userLocationData", userLocationData)

  console.log("weatherData", weatherData)

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
              temperature={item.avgTempC}
              image={
                weatherData.currentCondition?.isDayTime ? item.hourly[1].weatherIconUrl : item.hourly[0].weatherIconUrl
              }
              description={
                weatherData.currentCondition?.isDayTime ? item.hourly[1].weatherDesc : item.hourly[0].weatherDesc
              }
              isDayTime={weatherData.currentCondition?.isDayTime}
            />
          ))}
        </StyledTemperatureContainer>
      </StyledLandingContainer>
    </StyledLandingWrapper>
  );
};

export default LandingDisplayPage;
