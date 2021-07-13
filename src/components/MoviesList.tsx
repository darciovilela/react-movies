import { useState, useEffect } from 'react';
import axios from 'axios';
import { MoviesForm } from './MoviesForm';

// declaracao do que sera passado na interface
export interface Movie {
  id?: string;
  name: string;
  director: string;
  released: string;
  favorite?: boolean;
}

// estado inicial do form vazio
export const emptyMovie: Movie = {
  name: '',
  director: '',
  released: '',
};

// inicio do estado com array vazio
export const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Movie>(emptyMovie);

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Movie[]>(
        'http://localhost:4000/movies?favorite=true'
      );
      setMovies(result.data);
    };
    callFetchFunction();
  }, [date]);

  const deleteMovie = async (movie: Movie) => {
    await axios.delete<Movie>(`http://localhost:4000/movies/${movie.id}`);
    setDate(+new Date());
  };

  if (!movies.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {movies.length} Favorite Movies:</h1>
      <button onClick={() => setActiveRecord(emptyMovie)}>Insert New</button>
      <MoviesForm setDate={setDate} activeRecord={activeRecord} />
      <table className="center">
        <thead className="Movie-table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Movie</th>
            <th>Director</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody className="Movie-table-body">
          {movies.map((item) => {
            return (
              <tr
                key={item.id}
                className={activeRecord === item ? 'active' : ''}
              >
                <td>
                  <button
                    onClick={() => {
                      setActiveRecord(item);
                    }}
                  >
                    E
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteMovie(item)}>X</button>
                </td>
                <td>{item.name}</td>
                <td>{item.director}</td>
                <td>{item.released}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
