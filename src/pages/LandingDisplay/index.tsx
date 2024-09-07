import locationAxiosInstance from '../../app/services/locationAxios';
import weatherAxiosInstance from '../../app/services/weatherAxios';
import ErrorNotification from '../../common/components/ErrorNotification';
import Loading from '../../common/components/Loading';
import { LOADING_SIZE, TEMPERATURE } from '../../common/constants';
import { AvgWeather } from '../../common/interfaces';
import { convertDate } from '../../common/utils/convertDate';
import useGeolocation from '../../hooks/useGeolocation';
import DailyForecast from './components/DailyForecast';
import MainHeading from './components/MainHeading';
import { PageProps } from '../interface';
import { StyledLandingContainer, StyledLandingWrapper, StyledTemperatureContainer } from './styled';
import useWeatherAndLocationFetch from '../../hooks/useWeatherLocationFetch';

const LandingDisplayPage: React.FC<PageProps> = ({ setBackgroundColor }) => {
  const { coordinates, geolocationError, loadingGeolocation, permissionDenied } = useGeolocation();

  const { locationData, loadingCity, errorCity, weatherData, loadingWeather, errorWeather, isDayTime } =
    useWeatherAndLocationFetch({
      latitude: coordinates?.latitude,
      longitude: coordinates?.longitude,
      locationAxiosInstance,
      weatherAxiosInstance,
      singleDay: false,
      setBackgroundColor,
    });

    console.log("hgbh", weatherData)
  if (geolocationError && permissionDenied) return <ErrorNotification locationPermissionDenied={permissionDenied} />;

  if (geolocationError || errorCity || errorWeather) return <ErrorNotification />;

  if (loadingGeolocation || loadingCity || loadingWeather) return <Loading size={LOADING_SIZE} />;

  if (!coordinates || !locationData || !weatherData) return null;

  return (
    <StyledLandingWrapper>
      <StyledLandingContainer>
        <MainHeading
          userLocation={locationData}
          weatherData={weatherData}
          latitude={coordinates!.latitude}
          longitude={coordinates!.longitude}
        />
        <StyledTemperatureContainer>
          {weatherData.weather.slice(1).map((item: AvgWeather, index: number) => (
            <DailyForecast
              key={index}
              day={convertDate(item.date)}
              avgTemp={TEMPERATURE.replace('{{temp}}', item.avgTempC)}
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
