import { useState } from 'react';
import { Movie } from '../entities/Movie';

export const useForm = (initialState: Movie, action: Function) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    action(formState);
  };

  return { formState, setFormState, handleChange, handleSubmit };
};
