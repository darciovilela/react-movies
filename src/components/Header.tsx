import logo from '../img/new_logo_movie.png';

interface IProps {
  setPage: Function;
}

export const Header = (props: IProps) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <b>All kind of movies. Old and new classics.</b> <br />
        Lots seen more than once.
      </p>
      <div>
        <ul>
          <li onClick={() => props.setPage('Movies')}>Movies</li>
          <li onClick={() => props.setPage('Actors')}>Actors</li>
          <li onClick={() => props.setPage('Last Seen')}>Last Seen</li>
          <li onClick={() => props.setPage('Latin Movies')}>Latin Movies</li>
        </ul>
      </div>
    </header>
  );
};
