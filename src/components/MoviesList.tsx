export const MoviesList = () => {
  return (
    <div>
      <h2>My 10 Favorite Movies:</h2>
      <table>
        <thead className="Movie-table-head">
          <tr>
            <th>Movie</th>
            <th>Director</th>
            <th>Released</th>
          </tr>
        </thead>
        <tbody className="Movie-table-body">
          <tr>
            <td>Alien</td>
            <td>Ridley Scott</td>
            <td>1979</td>
          </tr>
          <tr>
            <td>Raging Bull</td>
            <td>Martin Scorsese</td>
            <td>1980</td>
          </tr>
          <tr>
            <td>The Godfather</td>
            <td>Francis Ford Coppola</td>
            <td>1972</td>
          </tr>
          <tr>
            <td>El Secreto de sus ojos</td>
            <td>Juan José Campanella</td>
            <td>2009</td>
          </tr>
          <tr>
            <td>Carrie</td>
            <td>Brian De Palma</td>
            <td>1976</td>
          </tr>
          <tr>
            <td>Carlitos Way</td>
            <td>Brian De Palma</td>
            <td>1993</td>
          </tr>
          <tr>
            <td>Pans Labirint</td>
            <td>Guillermo Del Toro</td>
            <td>2006</td>
          </tr>
          <tr>
            <td>The Shining</td>
            <td>Stanley Kubrick</td>
            <td>1980</td>
          </tr>
          <tr>
            <td>Seven</td>
            <td>David Fincher</td>
            <td>1995</td>
          </tr>
          <tr>
            <td>Collateral</td>
            <td>Michael Mann</td>
            <td>2004</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
