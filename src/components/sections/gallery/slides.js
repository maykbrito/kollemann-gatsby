import React from 'react';
import Swiper from 'react-id-swiper';

const SpaceBetweenSlides = () => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3200,
      disableOnInteraction: false,
    },
  }
  return (
    <Swiper {...params}>
      <div><img width="675px" src="https://source.unsplash.com/collection/308700/700x520?fe" alt=""/></div>
      <div><img width="675px" src="https://source.unsplash.com/collection/308700/700x520?de" alt=""/></div>
      <div><img width="675px" src="https://source.unsplash.com/collection/308700/700x520?ede" alt=""/></div>
      <div><img width="675px" src="https://source.unsplash.com/collection/308700/700x520?ed" alt=""/></div>
      <div><img width="675px" src="https://source.unsplash.com/collection/308700/700x520?wd" alt=""/></div>
    </Swiper>
  )
};
export default SpaceBetweenSlides;