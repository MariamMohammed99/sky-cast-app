import {
  AVG_TIME_INTERVAL,
  EXTRA_PARAMS_WEATHER,
  HOURLY_TIME_INTERVAL,
  WEATHER_DAYS_NO,
} from '../../app/services/constants';
import {
  constructCurrentWeatherParams,
  constructHistoricalWeatherParams,
  constructSearchParams,
} from './constructParams';

describe('Utility Functions', () => {
  describe('constructCurrentWeatherParams', () => {
    it('should return correct parameters when valid latitude and longitude and monthlyAvg are provided', () => {
      const latitude = 40.7128;
      const longitude = -74.006;
      const monthlyAvg = true;

      const result = constructCurrentWeatherParams(latitude, longitude, monthlyAvg);

      expect(result).toEqual({
        tp: AVG_TIME_INTERVAL,
        q: '40.7128,-74.006',
        num_of_days: WEATHER_DAYS_NO,
        mca: 'yes',
        extra: EXTRA_PARAMS_WEATHER,
      });
    });

    it('should return correct parameters when valid latitude and longitude are provided', () => {
        const latitude = 40.7128;
        const longitude = -74.006;
  
        const result = constructCurrentWeatherParams(latitude, longitude);
  
        expect(result).toEqual({
          tp: AVG_TIME_INTERVAL,
          q: '40.7128,-74.006',
          num_of_days: WEATHER_DAYS_NO,
          mca: 'no',
          extra: EXTRA_PARAMS_WEATHER,
        });
      });

      
    it('should return null when latitude or longitude is missing', () => {
      expect(constructCurrentWeatherParams(null, -74.006)).toBeNull();
      expect(constructCurrentWeatherParams(40.7128, null)).toBeNull();
    });

    it('should return null when latitude or longitude is not a number', () => {
      expect(constructCurrentWeatherParams('invalid', -74.006)).toBeNull();
      expect(constructCurrentWeatherParams(40.7128, 'invalid')).toBeNull();
    });
  });

  describe('constructHistoricalWeatherParams', () => {
    it('should return correct parameters when valid latitude, longitude, and date are provided', () => {
      const latitude = '40.7128';
      const longitude = '74.0060';
      const startDate = '2023-01-01';
      const endDate = '2023-01-07';

      const result = constructHistoricalWeatherParams(latitude, longitude, startDate, endDate);

      expect(result).toEqual({
        tp: HOURLY_TIME_INTERVAL,
        q: '40.7128,74.0060',
        date: startDate,
        enddate: endDate,
      });
    });
    

    it('should return null when latitude or longitude is missing', () => {
      expect(constructHistoricalWeatherParams(null, '74.0060', '2023-01-01')).toBeNull();
      expect(constructHistoricalWeatherParams('40.7128', null, '2023-01-01')).toBeNull();
    });

    it('should return null when latitude or longitude is not a number', () => {
      expect(constructHistoricalWeatherParams('invalid', '74.0060', '2023-01-01')).toBeNull();
      expect(constructHistoricalWeatherParams('40.7128', 'invalid', '2023-01-01')).toBeNull();
    });
  });

  describe('constructSearchParams', () => {
    it('should return correct search parameters', () => {
      const countryCode = 'EG';
      const searchPrefix = 'c';

      const result = constructSearchParams(countryCode, searchPrefix);

      expect(result).toEqual({
        namePrefix: searchPrefix,
        limit: 5,
        countryIds: countryCode,
      });
    });
  });
});
