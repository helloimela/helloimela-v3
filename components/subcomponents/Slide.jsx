import React from 'react';
import './Slide.scss';

const Slide = ({ subtitle, title, content }) => {
  return (
    <div className="swiper-content">
      <h3 className="title">{subtitle}</h3>
      <h2 className="title">{title}</h2>
      <div className="content-wrapper">
        <p className="first-paragraph item">{content}</p>
        <div className="story-img item" style={{backgroundImage: 'url(http://placeimg.com/640/480/arch)'}}></div>
      </div>
    </div>
  );
};

export default Slide;
