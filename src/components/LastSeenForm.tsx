import { ErrorBox } from './ErrorBox';
import { Movie } from '../entities/Movie';
import { emptyMovie } from '../entities/Movie';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const LastSeenForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const { formState, handleChange, handleSubmit, error } = useForm(
    setDate,
    activeRecord,
    emptyMovie,
    { favorite: false, latin: false, seen: true }
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
