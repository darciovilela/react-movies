import { LatinMoviesForm } from './LatinMoviesForm';
import { Movie } from '../entities/Movie';
import { useList } from '../hooks/useList';

// estado inicial do form vazio
export const emptyMovie: Movie = {
  name: '',
  country: '',
  released: '',
  favorite: false,
  latin: true,
  seen: false,
};

// inicio do estado com array vazio
export const LatinMovies = () => {
  const { movies, activeRecord, setActiveRecord, setDate, deleteMovie } =
    useList(emptyMovie, 'latin=true');

  if (!movies.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>{movies.length} Latin Movies that you must see:</h1>
      <button onClick={() => setActiveRecord(emptyMovie)}>Insert New</button>
      <LatinMoviesForm setDate={setDate} activeRecord={activeRecord} />
      <table className="center">
        <thead className="LatinMovies-table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Movie</th>
            <th>Country</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="LatinMovies-table-body">
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
                <td>{item.country}</td>
                <td>{item.released}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
