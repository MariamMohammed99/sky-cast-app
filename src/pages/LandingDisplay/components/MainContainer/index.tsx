import { MainContainerProps } from "./interface";
import { StyledMainContainer } from "./styled";

const MainContainer: React.FC<MainContainerProps> = ({
    country = 'Egypt',
    city = '6th of October',
    state = 'Giza',
    onClick,
  }) => {
    return (
      <StyledMainContainer onClick={onClick}>
        <h1>{city}, {state}, {country}</h1>
        <p>Weather: Sunny</p>
        <p>Humidity: 65%</p>
        <p>Wind: 10 mph</p>
      </StyledMainContainer>
    );
  };
  
  export default MainContainer;