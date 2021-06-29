import { useState } from 'react';
import axios from 'axios';
import { Movie } from './MoviesList';

// estado inicial do form vazio
const emptyMovie: Movie = {
  name: '',
  director: '',
  released: '',
};

interface IProps {
  setDate: Function;
}

export const MoviesForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyMovie);

  const createMovie = async (movie: Movie) => {
    const result = await axios.post<Movie>(
      'http://localhost:4000/movies',
      movie
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
    createMovie(formState);
    setDate(+new Date());
    setFormState(emptyMovie);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
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
