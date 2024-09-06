import { DayTemperatureProps } from './interface';
import {
  StyledDayTempContent,
  StyledDayTemperatureWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const DayTemperature: React.FC<DayTemperatureProps> = ({ day, temperature }) => {
  return (
    <StyledDayTemperatureWrapper>
      <StyledDayTempContent>
        <StyledDayTitle>{day}</StyledDayTitle>
        <StyledImageWrapper>
          <img
            src={'https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png'}
            alt="Your description"
          />
        </StyledImageWrapper>
        <StyledTemperature>{temperature}°C</StyledTemperature>
      </StyledDayTempContent>
    </StyledDayTemperatureWrapper>
  );
};

export default DayTemperature;
