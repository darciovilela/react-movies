import { useState, useEffect } from 'react';
import axios from 'axios';
import { LastSeenForm } from './LastSeenForm';

// declaracao do que sera passado na interface
export interface Last {
  name: string;
  about: string;
  rating: string;
}

export const LastSeen = () => {
  const [lastseen, setLastSeen] = useState<Last[]>([]);
  const [date, setDate] = useState(+new Date());

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Last[]>('http://localhost:4000/lastseen');
      setLastSeen(result.data);
    };
    callFetchFunction();
  }, []);

  if (!lastseen.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {lastseen.length} last seen movies:</h1>
      <LastSeenForm setDate={setDate} />
      <table className="center">
        <thead className="Lastseen-table-head">
          <tr>
            <th>Name</th>
            <th>About</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="Lastseen-table-body">
          {lastseen.map((item) => {
            return (
              <tr key={item.name}>
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
