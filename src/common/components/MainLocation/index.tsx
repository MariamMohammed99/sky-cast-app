import { UserLocationProps } from './interface';
import { StyledCountryHeader, StyledUserLocationWrapper, StyledCityHeader } from './styled';

const MainLocation: React.FC<UserLocationProps> = ({ location, clickable, onClick }) => {
  const { city, region, country } = location;

  const handleCityClick = () => {
    onClick();
  };

  return (
    <StyledUserLocationWrapper clickable={clickable} onClick={handleCityClick}>
      <StyledCityHeader>{city}</StyledCityHeader>
      <StyledCountryHeader>
        {region}, {country}
      </StyledCountryHeader>
    </StyledUserLocationWrapper>
  );
};

export default MainLocation;
