import React, { Suspense } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Story from './components/Story';
import Projects from './components/Projects';
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
          <Route path="projects" element={<Projects />} />
          <Route path="story" element={<Story />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
