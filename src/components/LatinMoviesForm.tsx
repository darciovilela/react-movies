import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../entities/Movie';
import { emptyMovie } from './LatinMovies';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const LatinMoviesForm: React.FC<IProps> = ({
  setDate,
  activeRecord,
}) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createLatin = async (latin: Movie) => {
    await axios.post<Movie>('http://localhost:4000/movies', {
      ...latin,
      latin: true,
    });
  };

  const updateLatin = async (latin: Movie) => {
    await axios.patch<Movie>(`http://localhost:4000/movies/${latin.id}`, latin);
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (formState.id) {
      await updateLatin(formState);
    } else {
      await createLatin(formState);
    }
    setDate(+new Date());
    setFormState(emptyMovie);
  };

  return (
    <div>
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
