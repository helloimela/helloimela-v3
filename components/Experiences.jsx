import React from 'react';
import Slider from 'react-slick';
import './Experiences.scss';

export default () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="opening-text">
      <h1>experiences</h1>
      <h3>
        I've been working as a frontend developer for 7+ years with experiences
        in Javascript, HTML/CSS, SCSS, React, design system, automated testing,
        and software lifecycle.
      </h3>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
