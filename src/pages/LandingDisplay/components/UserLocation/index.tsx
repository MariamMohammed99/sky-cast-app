import { UserLocationProps } from './interface';
import { StyledCountryHeader, StyledUserLocationWrapper, StyledCityHeader } from './styled';

const UserLocation: React.FC<UserLocationProps> = ({ userLocation, onClick }) => {
  const { city, region, country } = userLocation;
  const handleCityClick = () => {
    onClick();
  };
  return (
    <StyledUserLocationWrapper onClick={handleCityClick}>
      <StyledCityHeader>{city}</StyledCityHeader>
      <StyledCountryHeader>
        {region}, {country}
      </StyledCountryHeader>
    </StyledUserLocationWrapper>
  );
};

export default UserLocation;
