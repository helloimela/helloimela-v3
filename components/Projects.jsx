import React from 'react';
import './Projects.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { projects } from '../data/projects'

const Projects = () => {
  return (
    <div className="opening-text">
      <h1>latest projects</h1>
      <h3>
        Something I do in my free time
      </h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {projects.map((project) => 
          <SwiperSlide>
            <div className="project-content">
              <div className="big-img" style={{backgroundImage: 'url(http://placeimg.com/640/480/arch)'}}></div>
              <div className="project-text">
                <h2 className="title">{project.title}</h2>
                <p className="first-paragraph ">{project.content}</p>
              </div>
            </div>
          </SwiperSlide>
        )}
        
      </Swiper>
    </div>
  );
};

export default Projects;