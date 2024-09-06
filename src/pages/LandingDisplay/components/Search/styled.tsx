import { styled } from 'styled-components';

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding-top: 10px;
  border: none;
  outline: none;
  gap: 10px;

  @media (max-width: 555px) {
    width: 100%;
  }
`;

export const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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

export const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  max-height: 80vh;
  overflow-y: auto; // Scroll if results overflow
  background-color: white;
  color: #333;
  font-size: 14px;
  width: 100%;
  padding: 15px;
  border-radius: 20px;
`;

export const StyledResultItem = styled.div`
  transition: transform 0.1s;
  min-height: 35px;
  align-items: center;
  display: flex;
  cursor: pointer;
   transform-origin: center;

  &:hover {
    transform: scale(1.01);
  }
`;