import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movie, MovieFlags } from '../entities/Movie';

export const useForm = (
  setDate: Function,
  activeRecord: Movie,
  emptyMovie: Movie,
  formParams: MovieFlags
) => {
  const [formState, setFormState] = useState(activeRecord);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createMovie = async (movie: Movie) => {
    await axios.post<Movie>('http://localhost:4000/movies', {
      ...movie,
      ...formParams,
    });
  };

  const updateMovie = async (movie: Movie) => {
    await axios.patch<Movie>(`http://localhost:4000/movies/${movie.id}`, movie);
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setError(undefined);
      if (formState.id) {
        await updateMovie(formState);
      } else {
        await createMovie(formState);
      }
      setDate(+new Date());
      setFormState(emptyMovie);
    } catch (e) {
      setError(e);
    }
  };

  return { formState, handleChange, handleSubmit, error };
};
