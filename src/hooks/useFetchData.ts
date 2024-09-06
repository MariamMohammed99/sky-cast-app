import { useState, useEffect, useCallback } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { WEATHER_BASE_URL } from '../app/services/constants';

const useFetchData = (
  url: string,
  axiosInstance: AxiosInstance,
  config: AxiosRequestConfig,
  isSearchRequest = false,
) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(isSearchRequest ? false : true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(url, config);
      if (config.baseURL === WEATHER_BASE_URL) {
        setData(response.data.data);
      } else {
        setData(response.data);
      }
    } catch (err) {
      console.log('Error while fetching:', err);
      setError(err as Error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(config.params)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetchData;
