import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie, emptyMovie } from './MoviesList';

interface IProps {
  setDate: Function;
  activeRecord: Movie;
}

export const MoviesForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createMovie = async (movie: Movie) => {
    await axios.post<Movie>('http://localhost:4000/movies', {
      ...movie,
      favorite: true,
    });
  };

  const updateMovie = async (movie: Movie) => {
    await axios.patch<Movie>(`http://localhost:4000/movies/${movie.id}`, movie);
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
      await updateMovie(formState);
    } else {
      await createMovie(formState);
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
