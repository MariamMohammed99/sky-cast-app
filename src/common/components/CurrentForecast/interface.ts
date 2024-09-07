export interface SummaryData {
  name: string;
  value: string;
}

export interface CurrentForecastProps {
  temp: string;
  feelsLike: string;
  image: string;
  description: string;
  weekName: string;
  isDayTime: boolean;
  date: string;
  summaryData: SummaryData[];
}
