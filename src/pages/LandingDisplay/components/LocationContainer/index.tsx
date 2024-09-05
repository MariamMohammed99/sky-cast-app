import { LocationContainerProps } from './interface';
import { StyledCountryHeader, StyledLocationContainer } from './styled';

const LocationContainer: React.FC<LocationContainerProps> = ({ userLocation, onClick }) => {
  const { city, region, country } = userLocation[0];
  const handleCityClick = () => {
    onClick();
  };
  return (
    <StyledLocationContainer onClick={handleCityClick}>
      <h1>{city}</h1>
      <StyledCountryHeader>
        {region}, {country}
      </StyledCountryHeader>
    </StyledLocationContainer>
  );
};

export default LocationContainer;
