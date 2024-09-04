import { useState, useEffect, useCallback } from 'react';
import { AxiosRequestConfig } from 'axios';
import { UseAxiosResponse } from '../interfaces';
import axiosInstance from '../../app/services/api';

const useHttp = (
  url: string,
  config?: AxiosRequestConfig,
): UseAxiosResponse => {
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
      setError(err as Error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useHttp;
