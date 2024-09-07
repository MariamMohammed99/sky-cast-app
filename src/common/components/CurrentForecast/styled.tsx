import { styled } from 'styled-components';
import { StyledBackgroundProps } from '../../../pages/interface';

export const StyledCurrentForecastWrapper = styled.div<Omit<StyledBackgroundProps, 'backgroundColor'>>`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 8px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: max-content;
  width: fit-content;

  @media (max-width: 790px) {
    align-self: center;
  }
`;

export const StyledDayTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const StyledTemperature = styled.p`
  font-weight: bold;
  align-self: center;
  font-size: 40px;

  @media (max-width: 1170px) {
    font-size: 35px;
  }

  @media (max-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const StyledImageWrapper = styled.div`
  margin: 0 auto;
`;

export const StyledCurrentForecastContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

export const StyledTitleForecast = styled.h3`
  font-size: 14px;
  align-self: flex-start;
`;
export const StyledWeekName = styled.h3`
  font-size: 14px;
  align-self: center;
`;

export const StyledWeatherDetails = styled.div`
  width: 90%;
  display: flex;
  gap: 20px;
  margin-top: 10px;

  @media (max-width: 500px) {
    gap: 10px;
  }

  @media (max-width: 224px) {
    gap: 3px;
  }
`;

export const StyledWeatherColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex: 2;
  justify-content: space-evenly;
  align-self: center;
`;

export const StyledWeatherTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  flex: 2;
  justify-content: space-evenly;
  align-self: flex-start;
`;

export const StyledImg = styled.img`
  width: 80px;

  @media (max-width: 500px) {
    width: 60px;
  }
  @media (max-width: 290px) {
    width: 40px;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 287px) {
    font-size: 10px;
  }
`;
