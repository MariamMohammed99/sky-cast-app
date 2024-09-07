import { styled } from 'styled-components';
import { StyledUserLocationWrapperProps } from './interface';

export const StyledUserLocationWrapper = styled.div<StyledUserLocationWrapperProps>`
  color: white;
  border-radius: 10px;
  text-align: start;
  transition: transform 0.3s;
  flex: 2;

  ${(props) =>
    props.clickable === 'true' &&
    `
      &:hover {
        transform: scale(1.07);
        cursor:'pointer';
      }
    `}
`;

export const StyledCountryHeader = styled.h3`
  margin-top: 5px;
  font-size: 1rem;

`;

export const StyledCityHeader = styled.h1`
  margin: 0;
  font-size: 2rem;

    @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
