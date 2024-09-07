import { constructCityUrl } from './constructCityUrl';
import { GET_CITY_NAME_URL } from '../../app/constants';

describe('constructCityUrl', () => {
  const mockUrl = GET_CITY_NAME_URL
  
  it('should return empty string if latitude is undefined', () => {
    const result = constructCityUrl(undefined, 45.0);
    expect(result).toBe('');
  });

  it('should return empty string if longitude is undefined', () => {
    const result = constructCityUrl(12.0, undefined);
    expect(result).toBe('');
  });

  it('should correctly construct the URL for positive longitude', () => {
    const result = constructCityUrl(12.34, 56.78);
    expect(result).toBe(mockUrl.replace('{{lat+long}}', '12.34+56.78'));
  });

  it('should correctly construct the URL for negative longitude', () => {
    const result = constructCityUrl(12.34, -56.78);
    expect(result).toBe(mockUrl.replace('{{lat+long}}', '12.34-56.78'));
  });

  it('should correctly construct the URL for negative latitude', () => {
    const result = constructCityUrl(-12.34, 56.78);
    expect(result).toBe(mockUrl.replace('{{lat+long}}', '-12.34+56.78'));
  });

  it('should return empty string if latitude and longitude are invalid', () => {
    const result = constructCityUrl('invalid', 'invalid');
    expect(result).toBe('');
  });
});
