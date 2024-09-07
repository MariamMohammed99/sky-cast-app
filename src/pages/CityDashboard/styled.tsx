import { styled } from 'styled-components';
import { StyledBackgroundProps } from '../interface';

export const StyledDashboardWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  justify-content: center;
`;

export const StyledDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 80%;
`;

export const StyledLocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: start;
`;

export const StyledChartWrapper = styled.div<Omit<StyledBackgroundProps, 'backgroundColor'>>`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 8px;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: max-content;
  width: 100%;
  max-width:50vw;
  padding:20px;
`;

export const StyledChartHeader = styled.h3``;
