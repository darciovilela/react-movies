import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from '../entities/Movie';

export const useList = (emptyMovie: Movie, urlParams: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Movie>(emptyMovie);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      try {
        setLoading(true);
        setError(undefined);
        const result = await axios.get<Movie[]>(
          `http://localhost:4000/movies?${urlParams}`
        );
        setMovies(result.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    callFetchFunction();
  }, [date, urlParams]);

  const deleteMovie = async (movie: Movie) => {
    await axios.delete<Movie>(`http://localhost:4000/movies/${movie.id}`);
    setDate(+new Date());
  };

  return {
    movies,
    setDate,
    activeRecord,
    setActiveRecord,
    deleteMovie,
    loading,
    error,
  };
};
