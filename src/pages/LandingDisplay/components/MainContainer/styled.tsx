import { styled } from 'styled-components';

export const StyledMainContainer = styled.div`
  color: white;
  border-radius: 10px;
  text-align: start;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
