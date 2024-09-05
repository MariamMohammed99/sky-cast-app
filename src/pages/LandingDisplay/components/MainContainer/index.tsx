import { MainContainerProps } from './interface';
import { StyledMainContainer } from './styled';

const MainContainer: React.FC<MainContainerProps> = ({ userLocation, onClick }) => {
    const {city, region, country} = userLocation[0]
    const handleCityClick = () => {
        onClick()
    }
  return (
    <StyledMainContainer onClick={handleCityClick}>
      <h1>
        {city}
      </h1>
      <h3>{region}, {country}</h3>
    </StyledMainContainer>
  );
};

export default MainContainer;
