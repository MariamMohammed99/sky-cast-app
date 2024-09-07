import { SummaryData } from '../components/CurrentForecast/interface';
import { CurrentCondition } from '../interfaces';
import { constructSummaryDetails } from './constructSummaryDetails';

describe('constructSummaryDetails', () => {
  it('should construct summary details from currentCondition', () => {
    const mockCurrentCondition: CurrentCondition = {
      isDayTime: true,
      tempC: '50',
      weatherDesc: 'Sunny',
      weatherIconUrl: 'url',
      feelsLikeC: '40',
      humidity: '20',
      uvIndex: '2',
      visibility: '22',
      pressure: '1013',
      cloudCover: '24',
    };

    const expectedSummaryData: SummaryData[] = [
      { name: 'Visibilty', value: '22 km' },
      { name: 'Humidity', value: '20%' },
      { name: 'UV Index', value: '2' },
      { name: 'Cloud Cover', value: '24%' },
      { name: 'Pressure', value: '1013 in' },
    ];

    const result = constructSummaryDetails(mockCurrentCondition);
    expect(result).toEqual(expectedSummaryData);
  });
});
