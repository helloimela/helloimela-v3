import React, { Component, useRef } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import './style.scss';

const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <div className="opening-text">
        <h1>hello, i am ela</h1>
        <h2>
          Creative web developer
          <br /> with passion in UI/UX
        </h2>
      </div>
      <div className="navigation">
        <div className="nav-card">
          <div
            className="img-card"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600)',
            }}
          ></div>
          <h4>Experiences</h4>
        </div>
        <div className="nav-card right">
          <h4>Latest projects</h4>
          <div
            className="img-card"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=600)',
            }}
          ></div>
        </div>
        <div className="nav-card">
        <div
            className="img-card"
            style={{
              backgroundImage:
                'url(https://images.pexels.com/photos/3355732/pexels-photo-3355732.jpeg?auto=compress&cs=tinysrgb&w=600)',
            }}
          ></div>
          <h4>Story</h4>
        </div>
      </div>
    </main>
  );
};
render(<App />, document.getElementById('root'));
