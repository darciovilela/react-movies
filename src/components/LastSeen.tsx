import { useState, useEffect } from 'react';
import axios from 'axios';
import { LastSeenForm } from './LastSeenForm';
import { Movie } from '../entities/Movie';

// estado inicial do form vazio
export const emptyLast: Movie = {
  name: '',
  about: '',
  rating: '',
};

// inicio do estado com array vazio
export const LastSeen = () => {
  const [last, setLast] = useState<Movie[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Movie>(emptyLast);

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Movie[]>(
        'http://localhost:4000/movies?seen=true'
      );
      setLast(result.data);
    };
    callFetchFunction();
  }, [date]);

  const deleteLast = async (last: Movie) => {
    await axios.delete<Movie>(`http://localhost:4000/movies/${last.id}`);
    setDate(+new Date());
  };

  if (!last.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {last.length} last seen movies:</h1>
      <button onClick={() => setActiveRecord(emptyLast)}>Insert New</button>
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
          {last.map((item) => {
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
                  <button onClick={() => deleteLast(item)}>X</button>
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
