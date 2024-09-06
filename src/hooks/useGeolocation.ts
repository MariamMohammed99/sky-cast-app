import { useState, useEffect, useCallback } from 'react';
import { Coordinates, GeolocationState } from '../common/interfaces';

const useGeolocation = (): GeolocationState => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [permissionDenied, setPermissionDenied] = useState<boolean>(false);

  const handleSuccess = useCallback((position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setCoordinates({ latitude, longitude });
    setLoading(false);
  }, []);

  const handleError = useCallback((error: GeolocationPositionError) => {
    if (error.code === error.PERMISSION_DENIED) {
      setPermissionDenied(true);
    }
    setError(`Error: ${error.message}`);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, [handleSuccess, handleError]);

  return {
    coordinates,
    geolocationError: error,
    loadingGeolocation: loading,
    permissionDenied,
  };
};

export default useGeolocation;
