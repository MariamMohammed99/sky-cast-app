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

interface Link {
  rel: string;
  href: string;
}
interface Metadata {
  currentOffset: number;
  totalCount: number;
}
export interface LocationData {
  city: string;
  region: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}

export interface LocationRespone {
  links: Link[];
  data: LocationData[];
  metadata: Metadata;
}

export interface SearchRequestParams {
  namePrefix: string;
  limit: number;
  countryIds: string;
}

export interface CityRequestParams {
  namePrefix: string;
  limit: number;
  countryIds: string;
}