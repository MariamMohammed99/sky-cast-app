import { styled } from 'styled-components';
import { StyledDayTempProps } from './interface';

export const StyledDayTemperatureWrapper = styled.div<Omit<StyledDayTempProps, 'backgroundColor'>>`
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
`;

export const StyledDayTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const StyledTemperature = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StyledImageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const StyledDayTempContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 10px;
`;
