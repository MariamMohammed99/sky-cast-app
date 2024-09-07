import { styled } from 'styled-components';

export const StyledErrorWrapper = styled.div`
  height: 100vh;
  align-self: center;
  width: 80%;
`;

export const StyledErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StyledErrorImg = styled.img`
  width: 200px;
  color: white;
  text-align: center;

  @media (max-width: 571px) {
    width: 150px;
  }
`;

export const StyledErrorMessage = styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
