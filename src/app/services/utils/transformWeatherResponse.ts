/* eslint-disable @typescript-eslint/no-explicit-any */
import { Astronomy, AvgWeather, CurrentCondition } from '../../../common/interfaces';

export const transformCurrentCondition = (condition: any): CurrentCondition | undefined => {
  if (!condition) return undefined;
  return {
    localObsDateTime: condition.localObsDateTime || undefined,
    isDayTime: condition.isdaytime === 'yes',
    tempC: condition.temp_C,
    tempF: condition.temp_F,
    weatherDesc: condition.weatherDesc[0].value,
    weatherIconUrl: condition.weatherIconUrl[0].value,
    feelsLikeC: condition.FeelsLikeC,
    feelsLikeF: condition.FeelsLikeF,
    humidity: condition.humidity,
    uvIndex: condition.uvIndex,
    visibility: condition.visibility,
    visibilityMiles: condition.visibilityMiles,
    chanceOfRain: condition.chanceofrain || undefined,
  };
};

export const transformAstronomy = (astronomy: any): Astronomy => ({
  sunrise: astronomy.sunrise,
  sunset: astronomy.sunset,
  moonrise: astronomy.moonrise,
  moonset: astronomy.moonset,
  moonIllumination: astronomy.moon_illumination,
});

export const transformAvgWeather = (weather: any): AvgWeather => ({
  date: weather.date,
  astronomy: transformAstronomy(weather.astronomy[0]),
  maxTempC: weather.maxtempC,
  maxTempF: weather.maxtempF,
  minTempC: weather.mintempC,
  minTempF: weather.mintempF,
  avgTempC: weather.avgtempC,
  avgTempF: weather.avgtempF,
  uvIndexx: weather.uvIndex,
  hourly: weather.hourly.map(transformCurrentCondition),
});
