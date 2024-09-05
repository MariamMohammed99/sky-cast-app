import { LocationContainerProps } from './interface';
import { StyledLocationContainer } from './styled';

const LocationContainer: React.FC<LocationContainerProps> = ({ userLocation, onClick }) => {
  const { city, region, country } = userLocation[0];
  const handleCityClick = () => {
    onClick();
  };
  return (
    <StyledLocationContainer onClick={handleCityClick}>
      <h1>{city}</h1>
      <h3>
        {region}, {country}
      </h3>
    </StyledLocationContainer>
  );
};

export default LocationContainer;
