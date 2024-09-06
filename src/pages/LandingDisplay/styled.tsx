import styled from 'styled-components';

export const StyledLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex:1;
  padding-bottom: 20px;
`;

export const StyledTemperatureContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 20px 0;
  justify-content: space-evenly;
  width:80%;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const StyledLandingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  flex: 1;
`;

export const StyledLandingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  gap: 20px;

  @media (max-width: 555px) {
    flex-direction: column;
  }
`;

export const StyledLocationSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 2;
`;
