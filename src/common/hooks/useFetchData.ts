import { useState, useEffect, useCallback } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { UseAxiosResponse } from '../interfaces';

const useFetchData = (url: string, axiosInstance: AxiosInstance, config: AxiosRequestConfig): UseAxiosResponse => {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await axiosInstance.get(url, config);
      setData(response.data);
    } catch (err) {
      setError(err as Error)
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
