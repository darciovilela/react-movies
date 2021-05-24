import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
    </div>
  );
}

export default App;
