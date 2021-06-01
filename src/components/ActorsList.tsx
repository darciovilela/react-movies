import actors from '../data/actors.json';

export const ActorsList = () => {
  return (
    <div>
      <h2>My {actors.length} Favorite Artists:</h2>
      <table className="center">
        <thead className="Actors-table-head">
          <tr>
            <th>Name</th>
            <th>Born</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody className="Actors-table-body">
          {actors.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.born}</td>
                <td>{item.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
