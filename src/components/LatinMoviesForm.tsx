import { ErrorBox } from './ErrorBox';
import { Movie } from '../entities/Movie';
import { useMutation } from '../hooks/useMutation';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const LatinMoviesForm: React.FC<IProps> = ({
  setDate,
  activeRecord,
}) => {
  const formParams = {
    favorite: false,
    latin: true,
    seen: false,
  };
  const { create, update, error } = useMutation(formParams);
  const action = activeRecord.id ? update : create;
  const { formState, setFormState, handleChange, handleSubmit } = useForm(
    activeRecord,
    action
  );

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
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formState.country}
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
