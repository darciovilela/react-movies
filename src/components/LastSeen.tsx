import db from '../data/db.json';
const lastseen = db.lastseen;

export const LastSeen = () => {
  return (
    <div>
      <h2>My {lastseen.length} last seen movies:</h2>
      <table className="center">
        <thead className="Lastseen-table-head">
          <tr>
            <th>Name</th>
            <th>About</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody className="Lastseen-table-body">
          {lastseen.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.about}</td>
                <td>{item.rating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
