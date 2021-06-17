import { useState, useEffect } from 'react';
import axios from 'axios';

interface Movie {
  name: string;
  director: string;
  released: string;
}

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
      <h2>My {movies.length} Favorite Movies:</h2>
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
