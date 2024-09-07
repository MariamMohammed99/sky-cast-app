import { SummaryData } from '../components/CurrentForecast/interface';
import { CurrentCondition } from '../interfaces';

export const constructSummaryDetails = (currentCondition: CurrentCondition): SummaryData[] => {
  const { visibility, humidity, uvIndex, cloudCover, pressure } = currentCondition;
  return [
    { name: 'Visibilty', value: `${visibility} km` },
    { name: 'Humidity', value: `${humidity}%` },
    { name: 'UV Index', value: uvIndex },
    { name: 'Cloud Cover', value: `${cloudCover}%` },
    { name: 'Pressure', value: `${pressure} in` },
  ];
};
