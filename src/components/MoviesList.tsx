import { MoviesForm } from './MoviesForm';
import { Movie } from '../entities/Movie';
import { useList } from '../hooks/useList';

// estado inicial do form vazio
export const emptyMovie: Movie = {
  name: '',
  director: '',
  released: '',
};

// inicio do estado com array vazio
export const MoviesList = () => {
  const { movies, activeRecord, setActiveRecord, setDate, deleteMovie } =
    useList(emptyMovie, 'favorite=true');

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
