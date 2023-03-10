import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

export default () => (
  <>
    <div className="opening-text">
      <h1>hello, i am ela</h1>
      <h2>
        Creative web developer
        <br /> with passion in UI/UX
      </h2>
    </div>
    <div className="navigation">
      <Link to="/timeline" className="nav-card">
        <div
          className="img-card"
          style={{
            backgroundImage:
              'url(https://helloimela.com/images/Img1.png)',
          }}
        ></div>
        <h4>Experience</h4>
      </Link>
      {/* <Link to="/projects" className="nav-card right">
        <h4>Latest projects</h4>
        <div
          className="img-card"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/614484/pexels-photo-614484.jpeg?auto=compress&cs=tinysrgb&w=600)',
          }}
        ></div>
        </Link>*/}
      <Link to="/story" className="nav-card right">
        <h4>Story</h4>
        <div
          className="img-card"
          style={{
            backgroundImage:
              'url(https://helloimela.com/images/Img2.png)',
          }}
        ></div>
      </Link>
    </div>
  </>
);
