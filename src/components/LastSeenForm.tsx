import { ErrorBox } from './ErrorBox';
import { Movie } from '../entities/Movie';
import { useMutation } from '../hooks/useMutation';
import { useForm } from '../hooks/useForm';

interface IProps {
  callFetchFunction: Function;
  activeRecord: Movie;
}

export const LastSeenForm: React.FC<IProps> = ({
  callFetchFunction,
  activeRecord,
}) => {
  const formParams = {
    favorite: false,
    latin: false,
    seen: true,
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
          <label>About:</label>
          <input
            type="text"
            name="about"
            value={formState.about}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formState.rating}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
