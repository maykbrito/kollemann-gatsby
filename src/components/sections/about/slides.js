import React from 'react';
import Swiper from 'react-id-swiper';

const SpaceBetweenSlides = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  }
  return (
    <Swiper {...params}>
      <div><img src="https://source.unsplash.com/collection/308700/500x500?fed" alt=""/></div>
      <div><img src="https://source.unsplash.com/collection/308700/500x500?die" alt=""/></div>
      <div><img src="https://source.unsplash.com/collection/308700/500x500?wed" alt=""/></div>
    </Swiper>
  )
};
export default SpaceBetweenSlides;