import db from '../data/db.json';
const movies = db.movies;

export const MoviesList = () => {
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
