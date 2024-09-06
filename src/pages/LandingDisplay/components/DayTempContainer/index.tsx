import { useMemo } from 'react';
import { DAY_COLOR, NIGHT_COLOR } from '../../../../common/constants';
import { DayTemperatureProps } from './interface';
import {
  StyledDayTempContent,
  StyledDayTemperatureWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const DayTemperature: React.FC<DayTemperatureProps> = ({ day, temperature, image, description, isDayTime }) => {
  const backgroundColor = useMemo(() => (isDayTime ? DAY_COLOR : NIGHT_COLOR), [isDayTime]);
  return (
    <StyledDayTemperatureWrapper style={{ backgroundColor }}>
      <StyledDayTempContent>
        <StyledDayTitle>{day}</StyledDayTitle>
        <StyledImageWrapper>
          <img src={image} alt={description} />
        </StyledImageWrapper>
        <StyledTemperature>{temperature}°C</StyledTemperature>
        <StyledTemperature>{description}</StyledTemperature>
      </StyledDayTempContent>
    </StyledDayTemperatureWrapper>
  );
};

export default DayTemperature;
