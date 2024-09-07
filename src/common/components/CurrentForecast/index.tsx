import { useMemo } from 'react';
import { DAY_COLOR, NIGHT_COLOR } from '../../constants';
import { CurrentForecastProps } from './interface';
import {
  StyledCurrentForecastContent,
  StyledCurrentForecastWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const CurrentForecast: React.FC<CurrentForecastProps> = ({ minTemp, maxTemp, image, description, weekName, isDayTime }) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);

  return (
    <StyledCurrentForecastWrapper style={{ backgroundColor }}>
      <StyledCurrentForecastContent>
        <StyledDayTitle>{weekName}</StyledDayTitle>
        <StyledImageWrapper>
          <img src={image} alt={description} />
        </StyledImageWrapper>
        <StyledTemperature>{description}</StyledTemperature>
        <StyledTemperature>{minTemp}°C</StyledTemperature>
        <StyledTemperature>{maxTemp}°C</StyledTemperature>
      </StyledCurrentForecastContent>
    </StyledCurrentForecastWrapper>
  );
};

export default CurrentForecast;
