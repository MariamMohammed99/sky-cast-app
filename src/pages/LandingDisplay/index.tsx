import { useMemo } from 'react';
import useFetchData from '../../common/hooks/useFetchData';
import useGeolocation from '../../common/hooks/useGeolocation';
import LocationContainer from './components/LocationContainer';
import {
  StyledLandingContainer,
  StyledLandingHeader,
  StyledLandingWrapper,
  StyledLocationSearchWrapper,
  StyledTemperatureContainer,
} from './styled';
import { constructCityUrl } from '../../common/utils/constructCityUrl';
import locationAxiosInstance from '../../app/services/locationApi';
import { constructCurrentWeatherParams } from '../../common/utils/constructParams';
import { CURRENT_WEATHER_URL } from '../../app/constants';
import weatherAxiosInstance from '../../app/services/weatherApi';
import { LocationData } from '../../common/interfaces';
import { useNavigate } from 'react-router-dom';
import Search from './components/Search';
import DayTemperature from './components/DayTempContainer';

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

  console.log('data', userLocationData);
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
  if (!coordinates || !userLocationData) return <p>Coordinates not available.</p>;

  return (
    <StyledLandingWrapper>
      <StyledLandingContainer>
        <StyledLandingHeader>
          <StyledLocationSearchWrapper>
            <LocationContainer userLocation={userLocationData as LocationData[]} onClick={handleCityClick} />
            <Search userLocation={userLocationData as LocationData[]} />
          </StyledLocationSearchWrapper>
          <DayTemperature day={`Today`} temperature={Math.floor(Math.random() * 30) + 15}></DayTemperature>
          </StyledLandingHeader>
        <StyledTemperatureContainer>
          {Array.from({ length: 6 }).map((_, index) => (
            <DayTemperature key={index} day={`Day ${index + 1}`} temperature={Math.floor(Math.random() * 30) + 15} />
          ))}
        </StyledTemperatureContainer>
      </StyledLandingContainer>
    </StyledLandingWrapper>
  );
};

export default LandingDisplayPage;
