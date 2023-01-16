import React from 'react';
import './Experiences.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Experiences = () => {
  return (
    <div className="opening-text">
      <h1>experience</h1>
      <h3>
        I've been working as a frontend developer for 7+ years with experiences
        in Javascript, Typescript, HTML/CSS, SCSS, PostCSS, React, design
        system, automated testing, and software development lifecycle.
      </h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-content">
            <h3 className="title">2021, August - present</h3>
            <h2 className="title">H&amp;M Group</h2>
            <p className="first-paragraph ">
              Building a Style Inspiration feature from scratch in hm.com
              website
            </p>
            <p>Maintaining campaign features</p>
            <p>Develop &amp; test react component</p>
            <p>
              Collaborate with designers, data analyst, and backend engineer
            </p>{' '}
            <p>A/B testing with Optimizely</p>
            <p>Building solution for different complex problems</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h3 className="title">2018, July - 2021, August</h3>
            <h2 className="title">Scania</h2>
            <p className="first-paragraph">
              Building &amp; maintaining technical solution for Scania Digital
              Design System
            </p>
            <p>Translating design into technical implementation</p>
            <p>
              Creating web components, testing solution in different frameworks
            </p>
            <p>Angular 8, Headless CMS Strapi, and GraphQL</p>
            <p>Maintain Github repositories</p>
            <p>Publishing packages for the design system in NPM</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h3 className="title">2018, Feb - 2018, June</h3>
            <h2 className="title">Scania</h2>
            <p className="first-paragraph ">Master thesis research</p>
            <p>
              User experience research for software &amp; tools interoperability
              interface
            </p>
            <p>
              Conducted UX studies and developed prototypes for the
              visualisation of the tool which is build based on linked data and
              OSLC
            </p>
            <p>HTML/CSS, JS, d3js for visualizing linked data</p>
            <p>Usability testing</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Experiences;
