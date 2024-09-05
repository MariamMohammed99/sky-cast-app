import { DayTemperatureProps } from "./interface";
import { StyledDayTemperatureWrapper, StyledDayTitle, StyledTemperature } from "./styled";

const DayTemperature: React.FC<DayTemperatureProps> = ({ day, temperature }) => {
    return (
      <StyledDayTemperatureWrapper>
        <StyledDayTitle>{day}</StyledDayTitle>
        <StyledTemperature>{temperature}°C</StyledTemperature>
      </StyledDayTemperatureWrapper>
    );
  };
  
  export default DayTemperature;