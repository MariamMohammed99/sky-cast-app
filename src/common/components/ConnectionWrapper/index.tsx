import { useState, useEffect } from 'react';
import ErrorNotification from '../ErrorNotification';
import { NETWORK_ERROR_MESSAGE } from '../../constants';
import { ConnectionStatusWrapperProps } from './styled';

const ConnectionStatusWrapper: React.FC<ConnectionStatusWrapperProps> = ({ children }) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline ? <>{children}</> : <ErrorNotification customizedError={NETWORK_ERROR_MESSAGE}/>;
};

export default ConnectionStatusWrapper;
