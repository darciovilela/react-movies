import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { Footer } from './components/Footer';
import { ActorsList } from './components/ActorsList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <ActorsList />
      <Footer />
    </div>
  );
}

export default App;
