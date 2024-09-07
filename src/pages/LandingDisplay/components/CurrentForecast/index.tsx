import { useMemo } from 'react';
import { DAY_COLOR, NIGHT_COLOR } from '../../../../common/constants';
import { CurrentForecastProps } from './interface';
import {
  StyledDailyForecastContent,
  StyledDailyForecastWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const CurrentForecast: React.FC<CurrentForecastProps> = ({ minTemp, maxTemp, image, description, weekName, isDayTime }) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);

  return (
    <StyledDailyForecastWrapper style={{ backgroundColor }}>
      <StyledDailyForecastContent>
        <StyledDayTitle>{weekName}</StyledDayTitle>
        <StyledImageWrapper>
          <img src={image} alt={description} />
        </StyledImageWrapper>
        <StyledTemperature>{description}</StyledTemperature>
        <StyledTemperature>{minTemp}°C</StyledTemperature>
        <StyledTemperature>{maxTemp}°C</StyledTemperature>
      </StyledDailyForecastContent>
    </StyledDailyForecastWrapper>
  );
};

export default CurrentForecast;
