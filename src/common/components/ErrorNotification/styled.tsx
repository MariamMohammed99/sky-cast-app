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
  padding-top: 20px;
`;

export const StyledErrorIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  color: white;
  text-align: center;
`;

export const StyledErrorMessage = styled.div`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`;
