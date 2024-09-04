export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface GeolocationState {
  coordinates: Coordinates | null;
  geolocationError: string | null;
  loadingGeolocation: boolean;
  permissionDenied: boolean;
}

export interface UseAxiosResponse {
  data: unknown;
  loading: boolean;
  error: Error | null;
}
