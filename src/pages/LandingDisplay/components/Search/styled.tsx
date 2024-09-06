import { styled } from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:90%;
  padding: 15px;
  border-radius: 20px;
  background-color: white;
  border: none;
  outline: none;

  
  @media (max-width: 768px) {
    height: 40px;
  }

`;

export const StyledSearchInput = styled.input`
  font-size: 14px;
  text-overflow: ellipsis;
    border-radius: 20px;
  color: #333;
  width: 100%;
  border: none;
  outline: none;
`;

export const StyledSearchIcon = styled.span`
  font-size: 16px;
  pointer-events: none;
`;
