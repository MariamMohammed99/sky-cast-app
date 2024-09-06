//#region geolocation interfaces

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

//#endregion

//#region location interfaces

export interface SearchRequestParams {
  namePrefix: string;
  limit: number;
  countryIds: string;
}
export interface LocationData {
  city: string;
  region: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
}
interface Link {
  rel: string;
  href: string;
}
interface Metadata {
  currentOffset: number;
  totalCount: number;
}

export interface LocationRespone {
  links?: Link[];
  data: LocationData[];
  metadata?: Metadata;
}

//#endregion

//#region weather interfaces

export interface CurrentCondition {
  localObsDateTime?: string;
  isDayTime: boolean;
  tempC: string;
  tempF: string;
  weatherDesc: string;
  weatherIconUrl: string;
  feelsLikeC: string;
  feelsLikeF: string;
  humidity: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  chanceOfRain?: string;
}

export interface Astronomy {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moonIllumination: string;
}
export interface AvgWeather {
  date: string;
  astronomy: Astronomy;
  maxTempC: string;
  maxTempF: string;
  minTempC: string;
  minTempF: string;
  avgTempC: string;
  avgTempF: string;
  uvIndexx: string;
  hourly: CurrentCondition[];
}

export interface Weather {
  currentCondition?: CurrentCondition;
  weather: AvgWeather[];
}

export interface WeatherResponse {
  data: Weather;
}

//#endregion

export interface UseAxiosResponse {
  data: unknown;
  loading: boolean;
  error: Error | null;
}
