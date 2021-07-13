import { useState, useEffect } from 'react';
import axios from 'axios';
import { LatinMoviesForm } from './LatinMoviesForm';
import { Movie } from '../entities/Movie';

// estado inicial do form vazio
export const emptyLatin: Movie = {
  name: '',
  country: '',
  released: '',
};

// inicio do estado com array vazio
export const LatinMovies = () => {
  const [latin, setLatin] = useState<Movie[]>([]);
  const [date, setDate] = useState(+new Date());
  const [activeRecord, setActiveRecord] = useState<Movie>(emptyLatin);

  // componentDidMount or variable date was changed
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Movie[]>(
        'http://localhost:4000/movies?latin=true'
      );
      setLatin(result.data);
    };
    callFetchFunction();
  }, [date]);

  const deleteLatin = async (latin: Movie) => {
    await axios.delete<Movie>(`http://localhost:4000/movies/${latin.id}`);
    setDate(+new Date());
  };

  if (!latin.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>{latin.length} Latin Movies that you must see:</h1>
      <button onClick={() => setActiveRecord(emptyLatin)}>Insert New</button>
      <LatinMoviesForm setDate={setDate} activeRecord={activeRecord} />
      <table className="center">
        <thead className="LatinMovies-table-head">
          <tr>
            <th>E</th>
            <th>X</th>
            <th>Movie</th>
            <th>About</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="LatinMovies-table-body">
          {latin.map((item) => {
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
                  <button onClick={() => deleteLatin(item)}>X</button>
                </td>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.released}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
