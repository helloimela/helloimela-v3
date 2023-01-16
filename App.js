import React, { Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Timeline from './components/Timeline';
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
          <Route path="experience" element={<Experiences />} />
          <Route path="timeline" element={<Timeline />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
