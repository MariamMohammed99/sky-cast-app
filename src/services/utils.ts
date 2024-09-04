export const getWeatherParams = (
    latitude: number | undefined,
    longitude: number | undefined,
    days: number,
  ) => {
    if (!latitude || !longitude) return null;
    return {
      includelocation:'yes',
      showlocaltime:'yes',
      showmap:'yes',
      tp:1,
      q: `${latitude},${longitude}`,
      num_of_days: days,
    };
  };
  