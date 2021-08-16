import { LastSeenForm } from './LastSeenForm';
import { ErrorBox } from './ErrorBox';
import { Movie, emptyMovie } from '../entities/Movie';
import { useList } from '../hooks/useList';

// inicio do estado com array vazio
export const LastSeen = () => {
  const {
    records,
    activeRecord,
    setActiveRecord,
    setDate,
    deleteRecord,
    loading,
    error,
  } = useList<Movie>(emptyMovie, 'movies', 'seen=true');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <ErrorBox error={error} />;

  return (
    <div>
      <h1>My {records.length} last seen movies:</h1>
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
