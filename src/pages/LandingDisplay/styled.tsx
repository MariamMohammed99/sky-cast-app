import styled from 'styled-components';

export const StyledLandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 768px) {
    padding: 10px;
  }

  @media (max-width: 480px) {
    padding: 5px;
  }
`;

export const StyledTemperatureContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  position: absolute;
  margin-bottom: 30px;
  bottom: 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

export const StyledLandingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const StyledLandingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

export const StyledLocationSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  min-width: 40%;
`;
