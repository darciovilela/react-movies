import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActorsForm } from './ActorsForm';

export interface Actor {
  name: string;
  born: string;
  city: string;
}

export const ActorsList = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [date, setDate] = useState(+new Date());

  // componentDidMount
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Actor[]>('http://localhost:4000/actors');
      setActors(result.data);
    };
    callFetchFunction();
  }, [date]);

  if (!actors.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {actors.length} Favorite Actors:</h1>
      <ActorsForm setDate={setDate} />
      <table className="center">
        <thead className="Actors-table-head">
          <tr>
            <th>Name</th>
            <th>Born</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="Actors-table-body">
          {actors.map((item) => {
            return (
              <tr key={item.name}>
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
