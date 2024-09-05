import { LocationData } from '../../../../common/interfaces';

export interface MainContainerProps {
  userLocation: LocationData[];
  onClick: () => void;
}
