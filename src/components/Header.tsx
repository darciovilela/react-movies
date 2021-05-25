import logo from '../logo_movie.png';

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <b>All kind of movies. Old and new classics.</b> <br />
        Lots seen more than once.
      </p>
    </header>
  );
};
