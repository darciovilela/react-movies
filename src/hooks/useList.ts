import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from '../entities/Movie';

export const useList = (emptyMovie: Movie, urlParams: string) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Movie>(emptyMovie);

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Movie[]>(
        `http://localhost:4000/movies?${urlParams}`
      );
      setMovies(result.data);
    };
    callFetchFunction();
  }, [date, urlParams]);

  const deleteMovie = async (movie: Movie) => {
    await axios.delete<Movie>(`http://localhost:4000/movies/${movie.id}`);
    setDate(+new Date());
  };

  return { movies, setDate, activeRecord, setActiveRecord, deleteMovie };
};
