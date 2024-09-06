import { useMemo } from 'react';
import { DAY_COLOR, NIGHT_COLOR, TODAY_TEXT, TONIGHT_TEXT } from '../../../../common/constants';
import { CurrentForecastProps } from './interface';
import {
  StyledDailyForecastContent,
  StyledDailyForecastWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const CurrentForecast: React.FC<CurrentForecastProps> = ({ day, minTemp, maxTemp, image, description, isDayTime }) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);
  const dayTitle = useMemo(() => (isDayTime ? TODAY_TEXT : TONIGHT_TEXT), [isDayTime]);

  return (
    <StyledDailyForecastWrapper style={{ backgroundColor }}>
      <StyledDailyForecastContent>
        <StyledDayTitle>{`${dayTitle} ${day}`}</StyledDayTitle>
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
