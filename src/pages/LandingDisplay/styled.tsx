import styled from "styled-components";

export const StyledAppContainer = styled.div`
  background: linear-gradient(to bottom, rgba(22, 103, 148, 1), rgba(91, 176, 224, 1));
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

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

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
`;
