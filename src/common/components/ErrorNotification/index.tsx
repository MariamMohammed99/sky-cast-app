import { StyledErrorWrapper, StyledErrorMessage, StyledErrorImg, StyledErrorContainer } from './styled';
import { ErrorNotificationProps } from './interface';
import { ERROR_MESSAGE, LOCATION_PERMISSION_ERROR_MESSAGE, WARNING_ICON_ALT, WARNING_ICON_URL } from '../../constants';

const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  locationPermissionDenied = false,
  customizedError = ERROR_MESSAGE,
}) => {
  return (
    <StyledErrorWrapper>
      <StyledErrorContainer>
        <StyledErrorImg src={WARNING_ICON_URL} alt={WARNING_ICON_ALT}/>
        {locationPermissionDenied ? (
          <StyledErrorMessage>{LOCATION_PERMISSION_ERROR_MESSAGE}</StyledErrorMessage>
        ) : (
          <StyledErrorMessage>{customizedError}</StyledErrorMessage>
        )}
      </StyledErrorContainer>
    </StyledErrorWrapper>
  );
};

export default ErrorNotification;
