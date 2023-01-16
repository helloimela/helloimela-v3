import React, { Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experiences from './components/Experiences';
import './style.scss';
import { Link, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="experiences" element={<Experiences />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
