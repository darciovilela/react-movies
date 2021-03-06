import { ErrorBox } from './ErrorBox';
import { Movie } from '../entities/Movie';
import { emptyMovie } from '../entities/Movie';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const MoviesForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const { formState, handleChange, handleSubmit, error } = useForm(
    setDate,
    activeRecord,
    emptyMovie,
    { favorite: true, latin: false, seen: false }
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
