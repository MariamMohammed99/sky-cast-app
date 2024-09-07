import { useMemo } from 'react';
import { UserLocationProps } from './interface';
import { StyledCountryHeader, StyledUserLocationWrapper, StyledCityHeader, StyledDayHeader } from './styled';
import { TODAY_TEXT, TONIGHT_TEXT } from '../../constants';

const MainLocation: React.FC<UserLocationProps> = ({ location, date, isDayTime, clickable, onClick }) => {
  const { city, region, country } = location;

  const dayTitle = useMemo(() => (isDayTime ? TODAY_TEXT : TONIGHT_TEXT), [isDayTime]);

  const handleCityClick = () => {
    onClick();
  };

  return (
    <StyledUserLocationWrapper clickable={clickable} onClick={handleCityClick}>
      <StyledCityHeader>{city}</StyledCityHeader>
      <StyledCountryHeader>
        {region}, {country}
      </StyledCountryHeader>
      {date && <StyledDayHeader>{`${dayTitle} ${date}`}</StyledDayHeader>}
    </StyledUserLocationWrapper>
  );
};

export default MainLocation;
