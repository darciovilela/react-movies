import latinmovies from '../data/latinmovies.json';

export const LatinMovies = () => {
  return (
    <div>
      <h2>{latinmovies.length} Latin Movies that you must see:</h2>
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
              <tr>
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
