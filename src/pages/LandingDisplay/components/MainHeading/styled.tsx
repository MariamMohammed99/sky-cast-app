import { styled } from 'styled-components';

export const StyledLandingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  gap: 15px;
  align-items: flex-start;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const StyledLocationSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 2;
`;
