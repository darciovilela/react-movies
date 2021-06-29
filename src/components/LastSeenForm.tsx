import { useState } from 'react';
import axios from 'axios';
import { Last } from './LastSeen';

const emptyLast: Last = {
  name: '',
  about: '',
  rating: '',
};

interface IProps {
  setDate: Function;
}

export const LastSeenForm: React.FC<IProps> = ({ setDate }) => {
  const [formState, setFormState] = useState(emptyLast);

  const createLast = async (last: Last) => {
    const result = await axios.post<Last>(
      'http://localhost:4000/lastseen',
      last
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
    createLast(formState);
    setDate(+new Date());
    setFormState(emptyLast);
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
          <label>About:</label>
          <input
            type="text"
            name="about"
            value={formState.about}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formState.rating}
            onChange={handleChange}
          />
        </div>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};
