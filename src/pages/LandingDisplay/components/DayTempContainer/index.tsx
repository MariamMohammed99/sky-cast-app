import { DayTemperatureProps } from './interface';
import {
  StyledDayTempContent,
  StyledDayTemperatureWrapper,
  StyledDayTitle,
  StyledImageWrapper,
  StyledTemperature,
} from './styled';

const DayTemperature: React.FC<DayTemperatureProps> = ({ day, temperature, image, description }) => {
  return (
    <StyledDayTemperatureWrapper>
      <StyledDayTempContent>
        <StyledDayTitle>{day}</StyledDayTitle>
        <StyledImageWrapper>
          <img
            src={image}
            alt={description}
          />
        </StyledImageWrapper>
        <StyledTemperature>{temperature}°C</StyledTemperature>
        <StyledTemperature>{description}</StyledTemperature>
      </StyledDayTempContent>
    </StyledDayTemperatureWrapper>
  );
};

export default DayTemperature;
