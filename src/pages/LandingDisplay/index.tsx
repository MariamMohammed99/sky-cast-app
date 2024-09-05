// import { useMemo } from 'react';
// import { SEARCH_CITY_URL } from '../../app/constants';
// import useFetchData from '../../common/hooks/useFetchData';
// import { constructCurrentWeatherParams } from '../../common/utils/utils';
import useGeolocation from '../../common/hooks/useGeolocation';
// import locationAxiosInstance from '../../app/services/locationApi';
// import { constructSearchParams } from '../../common/utils/constructParams';
// import { getLocationData } from '../../app/services/locationApi';
// import { CURRENT_WEATHER_URL } from '../../app/constants';

const LandingDisplayPage = () => {
  const { coordinates, geolocationError, loadingGeolocation, permissionDenied } = useGeolocation();

  // const params = useMemo(
  //   () => constructCurrentWeatherParams(coordinates?.latitude, coordinates?.longitude, 2),
  //   [coordinates?.latitude, coordinates?.longitude],
  // );
  // const { data: weatherResponse } = useFetchData(params ? CURRENT_WEATHER_URL : '', {
  //   params,
  // });
  // console.log('weather response', weatherResponse);
  // const params = useMemo(
  //   () => constructSearchParams(coordinates?.latitude, coordinates?.longitude),
  //   [coordinates?.latitude, coordinates?.longitude],
  // );
  // const { data } = useFetchData(
  //   params ? SEARCH_CITY_URL : '',
  //   {
  //     params,
  //   },
  //   locationAxiosInstance,
  // );
  console.log('coordinates', coordinates);
  // console.log('data', data);

  if (loadingGeolocation) return <p>Loading...</p>;
  if (geolocationError)
    return (
      <div>
        <p>{geolocationError}</p>
        {permissionDenied && (
          <div>
            <p>Geolocation access has been denied. To enable it:</p>
            <ul>
              <li>
                For Chrome: Go to Settings &gt; Privacy and Security &gt; Site Settings &gt; Location and make sure the
                site is allowed.
              </li>
              <li>
                For Firefox: Go to Preferences &gt; Privacy & Security &gt; Permissions &gt; Location and check the site
                settings.
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  if (!coordinates) return <p>Coordinates not available.</p>;

  return (
    <>
      <div>
        {/* <p>Latitude: {coordinates.latitude}</p>
      <p>Longitude: {coordinates.longitude}</p> */}
        hu
      </div>
    </>
  );
};

export default LandingDisplayPage;
