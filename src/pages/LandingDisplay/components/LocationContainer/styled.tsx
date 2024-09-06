import { styled } from 'styled-components';

export const StyledLocationContainer = styled.div`
  color: white;
  border-radius: 10px;
  text-align: start;
  cursor: pointer;
  transition: transform 0.3s;
  flex:2;

  &:hover {
    transform: scale(1.12);
  }
`;

export const StyledCountryHeader = styled.h3`
  margin-top: 5px;
  font-size: 1rem;
`;
