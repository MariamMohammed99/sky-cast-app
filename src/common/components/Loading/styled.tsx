import { styled } from 'styled-components';
import { StyledSpinnerProps } from './interface';

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  border: ${(props) => props.size / 10}px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top: ${(props) => props.size / 10}px solid white;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
