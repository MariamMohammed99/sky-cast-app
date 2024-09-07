import { LocationData } from '../../../../common/interfaces';

export interface UserLocationProps {
  userLocation: LocationData;
  date: string;
  isDayTime: boolean;
  onClick: () => void;
}
