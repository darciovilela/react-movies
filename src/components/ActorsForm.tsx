import { useState } from 'react';
import axios from 'axios';
import { Actor } from './ActorsList';

const emptyActor: Actor = {
  name: '',
  born: '',
  city: '',
};

interface IProps {
  setDate: Function;
}

export const ActorsForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyActor);

  const createActor = async (actor: Actor) => {
    const result = await axios.post<Actor>(
      'http://localhost:4000/actors',
      actor
    );
  };

  const handleChange = (event: any) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createActor(formState);
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
        <input type="submit" />
      </form>
    </div>
  );
};
