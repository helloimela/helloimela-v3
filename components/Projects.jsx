import React from 'react';
import './Story.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const Projects = () => {
  return (
    <div className="opening-text">
      <h1>latest projects</h1>
      <h3>
        Something I do in my free time
      </h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="swiper-content">
            <h3 className="title">19 years ago</h3>
            <h2 className="title">How it was started</h2>
            <p className="first-paragraph ">
            My first encounter with web development was when I was 13 years old. I learned to build a website using Microsoft Frontpage &amp; Dreamweaver, building HTML layout using tables. I even won several web design competitions during my junior high school time. Since then, I loved web design and everything related to web development. Now that I think about it, it’s amazing to see how web technology always evolving. From table layout now we can easily create layout with CSS grid.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;