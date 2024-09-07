import { useMemo } from 'react';
import { UserLocationProps } from './interface';
import { StyledCountryHeader, StyledUserLocationWrapper, StyledCityHeader, StyledDayHeader } from './styled';
import { TODAY_TEXT, TONIGHT_TEXT } from '../../../../common/constants';

const UserLocation: React.FC<UserLocationProps> = ({ userLocation, date, isDayTime, onClick }) => {
  const { city, region, country } = userLocation;

  const dayTitle = useMemo(() => (isDayTime ? TODAY_TEXT : TONIGHT_TEXT), [isDayTime]);

  const handleCityClick = () => {
    onClick();
  };

  return (
    <StyledUserLocationWrapper onClick={handleCityClick}>
      <StyledCityHeader>{city}</StyledCityHeader>
      <StyledCountryHeader>
        {region}, {country}
      </StyledCountryHeader>
      <StyledDayHeader>{`${dayTitle} ${date}`}</StyledDayHeader>
    </StyledUserLocationWrapper>
  );
};

export default UserLocation;
