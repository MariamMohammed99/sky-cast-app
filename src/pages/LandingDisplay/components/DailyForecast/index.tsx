import { useMemo } from 'react';
import { DAY_COLOR, NIGHT_COLOR } from '../../../../common/constants';
import { DailyForecastProps } from './interface';
import {
  StyledDailyForecastContent,
  StyledDailyForecastWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const DailyForecast: React.FC<DailyForecastProps> = ({ day, temperature, image, description, isDayTime }) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);
  return (
    <StyledDailyForecastWrapper style={{ backgroundColor }}>
      <StyledDailyForecastContent>
        <StyledDayTitle>{day}</StyledDayTitle>
        <StyledImageWrapper>
          <img src={image} alt={description} />
        </StyledImageWrapper>
        <StyledTemperature>{temperature}°C</StyledTemperature>
        <StyledTemperature>{description}</StyledTemperature>
      </StyledDailyForecastContent>
    </StyledDailyForecastWrapper>
  );
};

export default DailyForecast;
