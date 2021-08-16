import { ActorsForm } from './ActorsForm';
import { ErrorBox } from './ErrorBox';
import { Actor, emptyActor } from '../entities/Actor';
import { useList } from '../hooks/useList';

// inicio do estado com array vazio
export const ActorsList = () => {
  const {
    records,
    activeRecord,
    setActiveRecord,
    callFetchFunction,
    deleteRecord,
    loading,
    error,
  } = useList<Actor>(emptyActor, 'actors');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) return <ErrorBox error={error} />;

  return (
    <div>
      <h1>My {records.length} Favorite Actors:</h1>
      <button onClick={() => setActiveRecord(emptyActor)}>Insert New</button>
      <ActorsForm
        callFetchFunction={callFetchFunction}
        activeRecord={activeRecord}
      />
      <table className="center">
        <thead className="Actors-table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Name</th>
            <th>Born</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="Actors-table-body">
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
                <td>{item.born}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
