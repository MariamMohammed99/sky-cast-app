export interface DailyForecastProps {
  day: string;
  avgTemp: string;
  image: string;
  description: string;
  isDayTime: boolean;
}

export interface StyledDailyForecastProps {
  backgroundColor: string;
}
