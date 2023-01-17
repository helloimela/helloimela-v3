import React from 'react';
import './Story.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Slide from './subcomponents/Slide';
import 'swiper/css';
import 'swiper/css/navigation';
import { stories } from '../data/story';
import Lottie from 'react-lottie';
import animationData from '../assets/surfing';

const Story = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
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
              image={story?.image}
            />
          </SwiperSlide>
        ))}
        <SwiperSlide className="last-slide">
          <h2 className="title">What's next?</h2>
          <h3 className="title">Surfing</h3>
          <h3 className="title subcontent">My journey did not end here. I love what I am doing. I want to keep challenging myself and continue building amazing stuff!</h3>
          <Lottie options={defaultOptions} height={400} width={400} />
          <p className="quotes">"If you never try, you'll never know,<br /> baby how far this thing could go"</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Story;
