import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { Footer } from './components/Footer';
import { ActorsList } from './components/ActorsList';
import { LastSeen } from './components/LastSeen';
import { LatinMovies } from './components/LatinMovies';

function App() {
  const [page, setPage] = useState('Movies');

  const swithPage = () => {
    switch (page) {
      case 'Movies':
        return <MoviesList />;
      case 'Actors':
        return <ActorsList />;
      case 'Last Seen':
        return <LastSeen />;
      case 'Latin Movies':
        return <LatinMovies />;
    }
  };

  return (
    <div className="App">
      <Header setPage={setPage} />
      {swithPage()}
      <Footer />
    </div>
  );
}

export default App;
