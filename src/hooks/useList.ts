import axios from 'axios';
import { useEffect, useState } from 'react';
import { Record } from '../entities/Record';

export const useList = <T extends Record>(
  emptyRecord: T,
  path: string,
  urlParams: string = ''
) => {
  const [records, setRecords] = useState<T[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<T>(emptyRecord);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const url = `http://localhost:4000/${path}`;

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
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
    };
    callFetchFunction();
  }, [date, urlParams, url]);

  const deleteRecord = async (record: T) => {
    await axios.delete<T>(`${url}/${record.id}`);
    setDate(+new Date());
  };

  return {
    records,
    setDate,
    activeRecord,
    setActiveRecord,
    deleteRecord,
    loading,
    error,
  };
};
