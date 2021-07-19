import { LastSeenForm } from './LastSeenForm';
import { Movie } from '../entities/Movie';
import { useList } from '../hooks/useList';

// estado inicial do form vazio
export const emptyMovie: Movie = {
  name: '',
  about: '',
  rating: '',
};

// inicio do estado com array vazio
export const LastSeen = () => {
  const { movies, activeRecord, setActiveRecord, setDate, deleteMovie } =
    useList(emptyMovie, 'seen=true');

  if (!movies.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {movies.length} last seen movies:</h1>
      <button onClick={() => setActiveRecord(emptyMovie)}>Insert New</button>
      <LastSeenForm setDate={setDate} activeRecord={activeRecord} />
      <table className="center">
        <thead className="Lastseen-table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Movie</th>
            <th>About</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="Lastseen-table-body">
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
                <td>{item.about}</td>
                <td>{item.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
