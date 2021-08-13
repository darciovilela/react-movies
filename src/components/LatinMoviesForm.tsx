import { Movie } from '../entities/Movie';
import { emptyMovie } from '../entities/Movie';
import { useForm } from '../hooks/useForm';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const LatinMoviesForm: React.FC<IProps> = ({
  setDate,
  activeRecord,
}) => {
  const { formState, handleChange, handleSubmit, error } = useForm(
    setDate,
    activeRecord,
    emptyMovie,
    { favorite: false, latin: true, seen: false }
  );

  return (
    <div>
      {error && (
        <div className="error">
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}
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
