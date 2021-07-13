import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie } from '../entities/Movie';
import { emptyLast } from './LastSeen';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const LastSeenForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createLast = async (last: Movie) => {
    await axios.post<Movie>('http://localhost:4000/movies', {
      ...last,
      seen: true,
    });
  };

  const updateLast = async (last: Movie) => {
    await axios.patch<Movie>(`http://localhost:4000/movies/${last.id}`, last);
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
      await updateLast(formState);
    } else {
      await createLast(formState);
    }
    setDate(+new Date());
    setFormState(emptyLast);
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
