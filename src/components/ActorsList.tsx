import { useState, useEffect } from 'react';
import axios from 'axios';
import { ActorsForm } from './ActorsForm';

// declaracao do que sera passado na interface
export interface Actor {
  id?: string;
  name: string;
  born: string;
  city: string;
}

// estado inicial do form vazio
export const emptyActor: Actor = {
  name: '',
  born: '',
  city: '',
};

// inicio do estado com array vazio
export const ActorsList = () => {
  const [actors, setActors] = useState<Actor[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Actor>(emptyActor);

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Actor[]>('http://localhost:4000/actors');
      setActors(result.data);
    };
    callFetchFunction();
  }, [date]);

  const deleteActor = async (actor: Actor) => {
    const result = await axios.delete<Actor>(
      `http://localhost:4000/actors/${actor.id}`
    );
    setDate(+new Date());
  };

  if (!actors.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {actors.length} Favorite Actors:</h1>
      <button onClick={() => setActiveRecord(emptyActor)}>Insert New</button>
      <ActorsForm setDate={setDate} activeRecord={activeRecord} />
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
          {actors.map((item) => {
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
                  <button onClick={() => deleteActor(item)}>X</button>
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
