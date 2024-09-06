import { useState, useEffect, useCallback } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';

const useFetchData = (url: string, axiosInstance: AxiosInstance, config: AxiosRequestConfig) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [haveBeenCalled, setHaveBeenCalled] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    if (!url) return;
    setHaveBeenCalled(true);
    setLoading(true);
    try {
      const response = await axiosInstance.get(url, config);
      setData(response.data);
    } catch (err) {
      console.log("Error while fetching:", err )
      setError(err as Error);
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(config.params)]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, haveBeenCalled };
};

export default useFetchData;
