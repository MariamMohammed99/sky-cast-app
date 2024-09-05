import { LocationData } from '../../../../common/interfaces';

export interface LocationContainerProps {
  userLocation: LocationData[];
  onClick: () => void;
}
