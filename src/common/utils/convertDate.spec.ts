import { convertDate } from './convertDate';

describe('convertDate', () => {
  it('should format date without year when includeYear is not sent', () => {
    const dateString = '2024-09-07';
    const result = convertDate(dateString);
    expect(result).toBe('Sat');
  });

  it('should format date with year when includeYear is sent', () => {
    const dateString = '2024-09-07';
    const result = convertDate(dateString, true);
    expect(result).toBe('Sep 7, 2024');
  });

  it('should handle dates without day and month properly', () => {
    const dateString = '2024-09-07T00:00:00Z';
    const result = convertDate(dateString, true);
    expect(result).toBe('Sep 7, 2024');
  });
});
