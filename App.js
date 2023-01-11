import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './style.scss';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <main className="wrapper">
      <Header />
      <Home />
    </main>
    </Router>
  );
};

export default App