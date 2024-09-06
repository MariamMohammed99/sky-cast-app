import { StyledErrorWrapper, StyledErrorMessage, StyledErrorIcon, StyledErrorContainer } from './styled';
import { ErrorNotificationProps } from './interface';
import { ERROR_MESSAGE, LOCATION_PERMISSION_ERROR_MESSAGE } from '../../constants';

const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  locationPermissionDenied = false,
  customizedError = ERROR_MESSAGE,
}) => {
  return (
    <StyledErrorWrapper>
      <StyledErrorContainer>
        <StyledErrorIcon>⚠</StyledErrorIcon>
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
