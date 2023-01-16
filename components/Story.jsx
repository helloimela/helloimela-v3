import React from 'react';
import './Story.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Slide from './subcomponents/Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import { stories } from '../data/story';

const Story = () => {
  return (
    <div className="opening-text">
      <h1>story</h1>
      <h3>Do you want to read my resume in a story mode?</h3>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {stories.map((story) => (
          <SwiperSlide>
            <Slide
              subtitle={story.subtitle}
              title={story.title}
              content={story.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Story;
