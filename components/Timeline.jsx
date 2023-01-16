import React from 'react';
import './Timeline.scss';

const Timeline = () => {
  return (
    <div className="opening-text">
      <h1>experience</h1>
      <h3>
        I've been working as a frontend developer for 7+ years with experiences
        in Javascript, Typescript, HTML/CSS, SCSS, PostCSS, React, design
        system, automated testing, and software development lifecycle.
      </h3>
      <ul className="timeline">
        <li>
          <div className="year">2021-present</div>
          <div className="work">
            <h2 className="title">H&amp;M Group</h2>
            <p>
              Building and maintaining features in hm.com website around Style
              Inspiration and campaigns.
            </p>
            <p className="skills">React, Typescript, SCSS, Unit test, Jest, A/B Testing, Git, GCP basic, CI/CD</p>
          </div>
        </li>
        <li>
          <div className="year">2018-2021</div>
          <span className="dot"></span>
          <div className="work">
            <h2 className="title">Scania</h2>
            <p>
              Developed Scania Digital Design System frontend solution.
              <p className="skills">Web components, HTML/CSS/SCSS, Javascript, StencilJS, Angular, Headless CMS Strapi, GraphQL, Git, NPM Maintainer, CI/CD, AWS basic</p>
            </p>
          </div>
        </li>
        <li>
          <div className="year">2018</div>
          <span className="dot"></span>
          <div className="work">
            <h2 className="title">Scania</h2>
            <p>
            Master thesis research student. UX research on LinkedData visualisation.
            </p>
            <p className="skills">Usability testing, d3js, Javascript, HTML/SCSS, User interview, User research, prototyping </p>
          </div>
        </li>
        <li>
          <div className="year">2017</div>
          <span className="dot"></span>
          <div className="work">
            <h2 className="title">Ericsson</h2>
            <p>
            UX Researcher summer intern. Conducted user research for internal system in the test area.
            </p>
            <p className="skills">User research, personas, prototyping, data visualisation</p>
          </div>
        </li>
        <li>
          <div className="year">2013-2016</div>
          <span className="dot"></span>
          <div className="work">
            <h2 className="title">Varnion, Indonesia</h2>
            <p>
            Web developer for internal and external web applications.
            </p>
            <p className="skills">Javascript, AngularJS, CSS SASS Compass, software automation (gulpJS), Git, PHP</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
