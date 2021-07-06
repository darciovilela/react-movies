import { useState } from 'react';
import axios from 'axios';
import { Latin } from './LatinMovies';

const emptyLatin: Latin = {
  name: '',
  country: '',
  released: '',
};

interface IProps {
  setDate: Function;
}

export const LatinMoviesForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyLatin);

  const createLatin = async (latin: Latin) => {
    const result = await axios.post<Latin>(
      'http://localhost:4000/latinmovies',
      latin
    );
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createLatin(formState);
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
