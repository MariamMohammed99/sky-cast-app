import { styled } from 'styled-components';

export const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border: none;
  outline: none;
  gap: 10px;

  @media (max-width: 571px) {
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

export const StyledSearchImg = styled.img`
  width: 30px;
`;

export const StyledResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  overflow-y: auto;
  background-color: white;
  color: #333;
  font-size: 14px;
  width: 100%;
  border-radius: 20px;
  overflow-x: hidden;
`;

export const StyledResultItem = styled.div`
  transition: transform 0.1s;
  padding: 0 15px;
  min-height: 35px;
  align-items: center;
  display: flex;
  cursor: pointer;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.3);

  &:hover {
    transform: scale(1.01);
  }
`;

export const StyledEmptyResultItem = styled.div`
  min-height: 25px;
  align-items: center;
  padding: 0 15pxx;
  display: flex;
  min-height: 35px;
`;
