import { useMemo } from 'react';
import { DAY_COLOR, NIGHT_COLOR } from '../../../../common/constants';
import { DailyForecastProps } from './interface';
import {
  StyledDailyForecastContent,
  StyledDailyForecastImg,
  StyledDailyForecastWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const DailyForecast: React.FC<DailyForecastProps> = ({ day, avgTemp, image, description, isDayTime }) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);
  return (
    <StyledDailyForecastWrapper style={{ backgroundColor }}>
      <StyledDailyForecastContent>
        <StyledDayTitle>{day}</StyledDayTitle>
        <StyledImageWrapper>
          <StyledDailyForecastImg src={image} alt={description} />
        </StyledImageWrapper>
        <StyledTemperature>{description}</StyledTemperature>
        <StyledTemperature>{avgTemp}°C</StyledTemperature>
      </StyledDailyForecastContent>
    </StyledDailyForecastWrapper>
  );
};

export default DailyForecast;
