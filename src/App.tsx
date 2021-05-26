import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <Footer />
    </div>
  );
}

export default App;
