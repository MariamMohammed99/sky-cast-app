import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledButtonLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: normal;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;
