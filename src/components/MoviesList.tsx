import { useState, useEffect } from 'react';
import axios from 'axios';

// declaracao do que sera passado na interface
interface Movie {
  name: string;
  director: string;
  released: string;
}
// inicio do estado com array vazio
export const MoviesList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  // componentDidMount
  useEffect(() => {
    const callFetchFunction = async () => {
      const result = await axios.get<Movie[]>('http://localhost:4000/movies');
      setMovies(result.data);
    };
    callFetchFunction();
  }, []);

  if (!movies.length) {
    return <div>Loading... (or empty)</div>;
  }

  return (
    <div>
      <h1>My {movies.length} Favorite Movies:</h1>
      <table className="center">
        <thead className="Movie-table-head">
          <tr>
            <th>Movie</th>
            <th>Director</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody className="Movie-table-body">
          {movies.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.director}</td>
                <td>{item.released}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
