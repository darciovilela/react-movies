import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { Record } from '../entities/Record';

export const useList = <T extends Record>(
  emptyRecord: T,
  path: string,
  urlParams: string = ''
) => {
  const [records, setRecords] = useState<T[]>([]);
  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const url = `http://localhost:4000/${path}`;

  // componentDidMount or variable date was changed

  const callFetchFunction = useCallback(async () => {
    try {
      setLoading(true);
      setError(undefined);
      const result = await axios.get<T[]>(`${url}?${urlParams}`);
      setRecords(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [urlParams, url]);

  useEffect(() => {
    callFetchFunction();
  }, [callFetchFunction]);

  const deleteRecord = async (record: T) => {
    await axios.delete<T>(`${url}/${record.id}`);
    callFetchFunction();
  };

  return {
    records,
    callFetchFunction,
    activeRecord,
    setActiveRecord,
    deleteRecord,
    loading,
    error,
  };
};
