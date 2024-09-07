export interface TableData {
  date: string;
  maxTemp: string;
  minTemp: string;
  avgTemp: string;
}

export interface TableProps {
  data: TableData[];
}
