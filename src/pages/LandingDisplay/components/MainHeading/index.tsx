import { useNavigate } from 'react-router-dom';
import { convertDate } from '../../../../common/utils/convertDate';
import Search from '../Search';
import TodaysForecast from '../TodaysForecast';
import UserLocation from '../UserLocation';
import { MainHeadingProps } from './interface';
import { StyledLandingHeader, StyledLocationSearchWrapper } from './styled';

const MainHeading: React.FC<MainHeadingProps> = ({ userLocation, weatherData, latitude, longitude }) => {
  const navigate = useNavigate();

  const handleCityClick = () => {
    const queryParams = new URLSearchParams({
      latitude: latitude.toString(),
      longitude: longitude.toString(),
    }).toString();

    navigate(`/dashboard?${queryParams}`);
  };

  return (
    <StyledLandingHeader>
      <StyledLocationSearchWrapper>
        <UserLocation userLocation={userLocation[0]} onClick={handleCityClick} />
        <Search userLocation={userLocation[0]} />
      </StyledLocationSearchWrapper>
      <TodaysForecast
        day={`Today ${convertDate(weatherData.weather[0].date)}`}
        temperature={weatherData.currentCondition!.tempC}
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
        isDayTime={weatherData.currentCondition!.isDayTime}
      ></TodaysForecast>
    </StyledLandingHeader>
  );
};

export default MainHeading;
