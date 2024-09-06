import { useNavigate } from 'react-router-dom';
import { convertDate } from '../../../../common/utils/convertDate';
import Search from '../Search';
import CurrentForecast from '../CurrentForecast';
import UserLocation from '../UserLocation';
import { MainHeadingProps } from './interface';
import { StyledLandingHeader, StyledLocationSearchWrapper } from './styled';
import { useMemo } from 'react';

const MainHeading: React.FC<MainHeadingProps> = ({ userLocation, weatherData, latitude, longitude }) => {
  const navigate = useNavigate();
  const { weather, currentCondition } = weatherData;

  const handleCityClick = () => {
    const queryParams = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    }).toString();

    navigate(`/dashboard?${queryParams}`);
  };

  const { weatherIconUrl, weatherDesc } = useMemo(
    () =>
      currentCondition!.isDayTime
        ? { weatherIconUrl: weather[0].hourly[1].weatherIconUrl, weatherDesc: weather[0].hourly[1].weatherDesc }
        : { weatherIconUrl: weather[0].hourly[0].weatherIconUrl, weatherDesc: weather[0].hourly[0].weatherDesc },
    [currentCondition, weather],
  );

  return (
    <StyledLandingHeader>
      <StyledLocationSearchWrapper>
        <UserLocation userLocation={userLocation[0]} onClick={handleCityClick} />
        <Search userLocation={userLocation[0]} />
      </StyledLocationSearchWrapper>
      <CurrentForecast
        day={convertDate(weatherData.weather[0].date)}
        minTemp={weather[0].minTempC}
        maxTemp={weather[0].maxTempC}
        image={weatherIconUrl}
        description={weatherDesc}
        isDayTime={weatherData.currentCondition!.isDayTime}
      ></CurrentForecast>
    </StyledLandingHeader>
  );
};

export default MainHeading;
