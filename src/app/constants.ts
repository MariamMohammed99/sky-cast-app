//#region weather api

export const WEATHER_BASE_URL = 'https://api.worldweatheronline.com/premium/v1/';
export const CURRENT_WEATHER_URL = 'weather.ashx'
export const HISTORICAL_WEATHER_URL = 'past-weather.ashx' 
export const REQUEST_FORMAT = 'json';
export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

//endregion

//#region location api

export const LOCATION_BASE_URL = 'http://geodb-free-service.wirefreethought.com/v1/geo/';
export const GET_CITY_NAME_URL = 'locations/{{lat+long}}/nearbyCities'
export const SEARCH_CITY_URL = 'cities'


export const LIMIT_SEARCH_RESULTS = 4
export const LIMIT_GET_CITY_NAME = 1

//#endregion