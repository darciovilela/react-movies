import axios from 'axios';
import { useState } from 'react';
import { Movie, MovieFlags } from '../entities/Movie';

export const useMutation = (formParams: MovieFlags) => {
  const [error, setError] = useState<Error>();
  const [success, setSuccess] = useState<boolean>(false);

  const create = async (movie: Movie) => {
    try {
      setError(undefined);
      setSuccess(false);
      await axios.post<Movie>('http://localhost:4000/movies', {
        ...movie,
        ...formParams,
      });
      setSuccess(true);
    } catch (e) {
      setError(e);
    }
  };

  const update = async (movie: Movie) => {
    try {
      setError(undefined);
      setSuccess(false);
      await axios.patch<Movie>(
        `http://localhost:4000/movies/${movie.id}`,
        movie
      );
      setSuccess(true);
    } catch (e) {
      setError(e);
    }
  };

  return { create, update, error, setError, success };
};
