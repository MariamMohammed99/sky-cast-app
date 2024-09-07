import { useNavigate } from 'react-router-dom';
import { convertDate } from '../../../../common/utils/convertDate';
import Search from '../Search';
import CurrentForecast from '../../../../common/components/CurrentForecast';
import { MainHeadingProps } from './interface';
import { StyledLandingHeader, StyledLocationSearchWrapper } from './styled';
import { useMemo } from 'react';
import MainLocation from '../../../../common/components/MainLocation';
import { TEMPERATURE } from '../../../../common/constants';

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
        <MainLocation location={userLocation[0]} isDayTime clickable={'true'} onClick={handleCityClick} />
        <Search userLocation={userLocation[0]} />
      </StyledLocationSearchWrapper>
      <CurrentForecast
        date={convertDate(weather[0].date, true)}
        weekName={convertDate(weather[0].date)}
        temp={TEMPERATURE.replace('{{temp}}', currentCondition!.tempC)}
        feelsLike={TEMPERATURE.replace('{{temp}}', currentCondition!.feelsLikeC)}
        image={weatherIconUrl}
        description={weatherDesc}
        isDayTime={weatherData.currentCondition!.isDayTime}
      ></CurrentForecast>
    </StyledLandingHeader>
  );
};

export default MainHeading;
