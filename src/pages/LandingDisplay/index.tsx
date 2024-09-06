import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_WEATHER_URL } from '../../app/constants';
import locationAxiosInstance from '../../app/services/locationApi';
import weatherAxiosInstance from '../../app/services/weatherApi';
import { AvgWeather, LocationData } from '../../common/interfaces';
import { constructCityUrl } from '../../common/utils/constructCityUrl';
import { constructCurrentWeatherParams } from '../../common/utils/constructParams';
import useFetchData from '../../hooks/useFetchData';
import useGeolocation from '../../hooks/useGeolocation';
import DayTemperature from './components/DayTempContainer';
import LocationContainer from './components/LocationContainer';
import Search from './components/Search';
import {
  StyledLandingContainer,
  StyledLandingHeader,
  StyledLandingWrapper,
  StyledLocationSearchWrapper,
  StyledTemperatureContainer,
} from './styled';
import { convertDate } from '../../common/utils/convertDate';

const LandingDisplayPage = () => {
  const navigate = useNavigate();

  const handleCityClick = () => {
    const queryParams = new URLSearchParams({
      latitude: coordinates!.latitude.toString(),
      longitude: coordinates!.longitude.toString(),
    }).toString();

    navigate(`/dashboard?${queryParams}`);
  };
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

  console.log('weatherData', weatherData);

  if (loadingGeolocation || loadingUserCity || loadingWeather) return <p>Fetching your coordinates</p>;
  if (geolocationError || errorUserCity || errorWeather)
    return (
      <div>
        <p>{geolocationError}</p>
        {permissionDenied && (
          <div>
            <p>Geolocation access has been denied. To enable it:</p>
            <ul>
              <li>
                For Chrome: Go to Settings &gt; Privacy and Security &gt; Site Settings &gt; Location and make sure the
                site is allowed.
              </li>
              <li>
                For Firefox: Go to Preferences &gt; Privacy & Security &gt; Permissions &gt; Location and check the site
                settings.
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  if (!coordinates || !userLocationData || !weatherData) return <p>Coordinates not available.</p>;
  //weatherData.currentCondition?.isDayTime? item.hourly[1]:item.hourly[0]
  return (
    <StyledLandingWrapper>
      <StyledLandingContainer>
        <StyledLandingHeader>
          <StyledLocationSearchWrapper>
            <LocationContainer userLocation={userLocationData as LocationData[]} onClick={handleCityClick} />
            <Search userLocation={userLocationData as LocationData[]} />
          </StyledLocationSearchWrapper>
          <DayTemperature
            day={`Today ${convertDate(weatherData.weather[0].date)}`}
            temperature={weatherData.currentCondition?.tempC}
            image={
              weatherData.currentCondition?.isDayTime
                ? weatherData.weather[0].hourly[1].weatherIconUrl
                : weatherData.weather[0].hourly[0].weatherIconUrl
            }
            description={
              weatherData.currentCondition?.isDayTime
                ? weatherData.weather[0].hourly[1].weatherDesc
                : weatherData.weather[0].hourly[0].weatherDesc
            }
          ></DayTemperature>
        </StyledLandingHeader>
        <StyledTemperatureContainer>
          {weatherData.weather.slice(1).map((item: AvgWeather, index: number) => (
            <DayTemperature
              key={index}
              day={convertDate(item.date)}
              temperature={item.avgTempC}
              image={
                weatherData.currentCondition?.isDayTime ? item.hourly[1].weatherIconUrl : item.hourly[0].weatherIconUrl
              }
              description={
                weatherData.currentCondition?.isDayTime ? item.hourly[1].weatherDesc : item.hourly[0].weatherDesc
              }
            />
          ))}
        </StyledTemperatureContainer>
      </StyledLandingContainer>
    </StyledLandingWrapper>
  );
};

export default LandingDisplayPage;
