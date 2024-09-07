import { styled } from 'styled-components';
import { StyledDailyForecastProps } from './interface';

export const StyledDailyForecastWrapper = styled.div<Omit<StyledDailyForecastProps, 'backgroundColor'>>`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 8px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  flex: 1;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  min-width: max-content;
  flex-grow: 1;
  flex-basis: 0;

  @media (max-width: 814px) {
    flex-basis: calc(33.33% - 15px);
  }
`;

export const StyledDayTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const StyledTemperature = styled.p`
  font-size: 1.2rem;
  margin-top: 10px;
  font-weight: bold;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledDailyForecastContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

export const StyledDailyForecastImg = styled.img``;
