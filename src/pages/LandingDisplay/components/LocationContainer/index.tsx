import { LocationContainerProps } from './interface';
import { StyledCountryHeader, StyledLocationContainer, StyledCityHeader } from './styled';

const LocationContainer: React.FC<LocationContainerProps> = ({ userLocation, onClick }) => {
  const { city, region, country } = userLocation[0];
  const handleCityClick = () => {
    onClick();
  };
  return (
    <StyledLocationContainer onClick={handleCityClick}>
      <StyledCityHeader>{city}</StyledCityHeader>
      <StyledCountryHeader>
        {region}, {country}
      </StyledCountryHeader>
    </StyledLocationContainer>
  );
};

export default LocationContainer;
