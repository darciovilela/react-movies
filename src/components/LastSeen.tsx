import { useState, useEffect } from 'react';
import axios from 'axios';

interface LastSeenMovie {
  name: string;
  about: string;
  rating: string;
}

export const LastSeen = () => {
  const [lastseen, setLastSeen] = useState<LastSeenMovie[]>([]);

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<LastSeenMovie[]>(
        'http://localhost:4000/lastseen'
      );
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
