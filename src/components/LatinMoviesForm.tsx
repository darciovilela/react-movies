import { useEffect, useState } from 'react';
import axios from 'axios';
import { Latin, emptyLatin } from './LatinMovies';

interface IProps {
  setDate: Function;
  activeRecord: Latin;
}

export const LatinMoviesForm: React.FC<IProps> = ({
  setDate,
  activeRecord,
}) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createLatin = async (latin: Latin) => {
    await axios.post<Latin>('http://localhost:4000/latinmovies', latin);
  };

  const updateLatin = async (latin: Latin) => {
    await axios.patch<Latin>(`http://localhost:4000/movies/${latin.id}`, latin);
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
    setFormState(emptyLatin);
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
