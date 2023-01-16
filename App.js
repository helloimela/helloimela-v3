import React, { Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Timeline from './components/Timeline';
import './style.scss';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="timeline" element={<Timeline />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
