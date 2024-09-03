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
