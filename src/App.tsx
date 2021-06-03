import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { Footer } from './components/Footer';
import { ActorsList } from './components/ActorsList';
import { LastSeen } from './components/LastSeen';
import { LatinMovies } from './components/LatinMovies';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <ActorsList />
      <LastSeen />
      <LatinMovies />
      <Footer />
    </div>
  );
}

export default App;
