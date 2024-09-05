import { styled } from 'styled-components';

export const StyledTitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  width:80%;
  padding-top:40px;
  }
`;
export const StyledTitleBarWrapper = styled.div`
  width:100%;
    display: flex;
    justify-content: center;
  }
`;

export const StyledHeaderTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  color: white;
  font-family: sans-serif;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const StyledButtonLinksWrapper = styled.div`
  display: flex;
  }
`;
