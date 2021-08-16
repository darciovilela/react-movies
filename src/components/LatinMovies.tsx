import { LatinMoviesForm } from './LatinMoviesForm';
import { ErrorBox } from './ErrorBox';
import { Movie, emptyMovie } from '../entities/Movie';
import { useList } from '../hooks/useList';

// inicio do estado com array vazio
export const LatinMovies = () => {
  const {
    records,
    activeRecord,
    setActiveRecord,
    setDate,
    deleteRecord,
    loading,
    error,
  } = useList<Movie>(emptyMovie, 'movies', 'latin=true');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <ErrorBox error={error} />;

  return (
    <div>
      <h1>{records.length} Latin Movies that you must see:</h1>
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
          {records.map((item) => {
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
                  <button onClick={() => deleteRecord(item)}>X</button>
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
