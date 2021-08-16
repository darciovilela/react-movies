import { ErrorBox } from './ErrorBox';
import { emptyMovie, Movie } from '../entities/Movie';
import { useMutation } from '../hooks/useMutation';
import { useForm } from '../hooks/useForm';
import { useEffect } from 'react';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const MoviesForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const formParams = {
    favorite: true,
    latin: false,
    seen: false,
  };
  const { create, update, error, success } = useMutation(formParams);
  const action = activeRecord.id ? update : create;
  const { formState, setFormState, handleChange, handleSubmit } = useForm(
    activeRecord,
    action
  );

  useEffect(() => {
    if (success) {
      setFormState(emptyMovie);
      setDate(+new Date());
    }
  }, [success, setFormState, setDate]);

  return (
    <div>
      {error && <ErrorBox error={error} />}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Movie:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Director:</label>
          <input
            type="text"
            name="director"
            value={formState.director}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Released:</label>
          <input
            type="text"
            name="released"
            value={formState.released}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
