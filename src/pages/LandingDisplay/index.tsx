import { useMemo } from 'react';
import useFetchData from '../../common/hooks/useFetchData';
import useGeolocation from '../../common/hooks/useGeolocation';
import DayTemperature from './components/DayTempContainer';
import MainContainer from './components/MainContainer';
import { StyledAppContainer, StyledTemperatureContainer } from './styled';
import { constructCityUrl } from '../../common/utils/constructCityUrl';
import locationAxiosInstance from '../../app/services/locationApi';
import { constructCurrentWeatherParams } from '../../common/utils/constructParams';
import { CURRENT_WEATHER_URL } from '../../app/constants';
import weatherAxiosInstance from '../../app/services/weatherApi';

const LandingDisplayPage = () => {
  const { coordinates, geolocationError, loadingGeolocation, permissionDenied } = useGeolocation();
  
  const {
    data: userLocationData,
    loading: loadingUserCity,
    error: errorUserCity,
  } = useFetchData(constructCityUrl(coordinates?.latitude, coordinates?.longitude), locationAxiosInstance);

  const weatherParams = useMemo(
    () => constructCurrentWeatherParams(coordinates?.latitude, coordinates?.longitude, 2),
    [coordinates],
  );
  const {
    data: weatherData,
    loading: loadingWeather,
    error: errorWeather,
  } = useFetchData(weatherParams ? 's'+CURRENT_WEATHER_URL : '', weatherAxiosInstance, {
    params: weatherParams,
  });
  // const params = useMemo(
  //   () => constructSearchParams(coordinates?.latitude, coordinates?.longitude),
  //   [coordinates?.latitude, coordinates?.longitude],
  // );
  // const { data } = useFetchData(
  //   params ? SEARCH_CITY_URL : '',
  //   {
  //     params,
  //   },
  //   locationAxiosInstance,
  // );

  console.log('data', userLocationData);
  console.log('weatherData', weatherData);
  console.log('ERORCEDC',errorWeather)

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
  if (!coordinates) return <p>Coordinates not available.</p>;

  return (
    <StyledAppContainer>
      <MainContainer />
      <StyledTemperatureContainer>
        {Array.from({ length: 7 }).map((_, index) => (
          <DayTemperature key={index} day={`Day ${index + 1}`} temperature={Math.floor(Math.random() * 30) + 15} />
        ))}
      </StyledTemperatureContainer>
    </StyledAppContainer>
  );
};

export default LandingDisplayPage;
