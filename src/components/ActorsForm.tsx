import { useEffect, useState } from 'react';
import axios from 'axios';
import { Actor, emptyActor } from './ActorsList';

interface IProps {
  setDate: Function;
  activeRecord: Actor;
}

export const ActorsForm: React.FC<IProps> = ({ setDate, activeRecord }) => {
  const [formState, setFormState] = useState(activeRecord);

  useEffect(() => {
    setFormState(activeRecord);
  }, [activeRecord]);

  const createActor = async (actor: Actor) => {
    await axios.post<Actor>('http://localhost:4000/actors', actor);
  };

  const updateActor = async (actor: Actor) => {
    await axios.patch<Actor>(`http://localhost:4000/actors/${actor.id}`, actor);
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (formState.id) {
      await updateActor(formState);
    } else {
      await createActor(formState);
    }
    setDate(+new Date());
    setFormState(emptyActor);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Born:</label>
          <input
            type="text"
            name="born"
            value={formState.born}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formState.city}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
