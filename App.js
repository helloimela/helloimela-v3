import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './style.scss';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="experiences" element={<Home />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App