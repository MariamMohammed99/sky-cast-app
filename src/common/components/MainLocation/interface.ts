import { LocationData } from '../../interfaces';

export interface UserLocationProps {
  location: LocationData;
  date?: string;
  isDayTime?: boolean;
  clickable: string;
  onClick: () => void;
}

export interface StyledUserLocationWrapperProps {
  clickable: string;
}
