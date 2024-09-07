export interface CurrentForecastProps {
  minTemp: string;
  maxTemp: string;
  image: string;
  description: string;
  weekName: string;
  isDayTime: boolean;
}

export interface StyledTodaysForecastProps {
  backgroundColor: string;
}
