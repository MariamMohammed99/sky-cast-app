import { LocationData, Weather } from '../../../../common/interfaces';

export interface MainHeadingProps {
  userLocation: LocationData[];
  weatherData: Weather;
  latitude:number;
  longitude:number;
}
