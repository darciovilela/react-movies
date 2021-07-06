import { useState, useEffect } from 'react';
import axios from 'axios';
import { LatinMoviesForm } from './LatinMoviesForm';

export interface Latin {
  name: string;
  country: string;
  released: string;
}

export const LatinMovies = () => {
  const [latinmovies, setLatinMovies] = useState<Latin[]>([]);
  const [date, setDate] = useState(+new Date());

  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Latin[]>(
        'http://localhost:4000/latinmovies'
      );
      setLatinMovies(result.data);
    };
    callFetchFunction();
  }, []);

  if (!latinmovies.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>{latinmovies.length} Latin Movies that you must see:</h1>
      <LatinMoviesForm setDate={setDate} />
      <table className="center">
        <thead className="LatinMovies-table-head">
          <tr>
            <th>Movie</th>
            <th>Country</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody className="LatinMovies-table-body">
          {latinmovies.map((item) => {
            return (
              <tr key={item.name}>
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
