import { useLocation } from 'react-router-dom';
import { ASTRONOMY_URL } from '../../app/constants';
import weatherAxiosInstance from '../../app/services/weatherApi';
import useFetchData from '../../common/hooks/useFetchData';
import { constructAstronomyParams } from '../../common/utils/constructParams';
import { useMemo } from 'react';

const CityDashboardPage = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get('latitude');
  const longitude = queryParams.get('longitude');

  const astronomyParams = useMemo(() => constructAstronomyParams(latitude, longitude), [latitude, longitude]);
  const {
    data: astronomyData,
    loading: loadingAstronomy,
    error: errorAstronomy,
  } = useFetchData(astronomyParams ? ASTRONOMY_URL : '', weatherAxiosInstance, {
    params: astronomyParams,
  });
  console.log('data', astronomyData);
  console.log('loading', loadingAstronomy);
  console.log('error', errorAstronomy);

  return <div>CityWeatherDashboardPage</div>;
};

export default CityDashboardPage;
