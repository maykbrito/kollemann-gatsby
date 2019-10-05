import React from 'react';
import Swiper from 'react-id-swiper';

const SpaceBetweenSlides = () => {
  const params = {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
  }

  const images =  [
    "https://source.unsplash.com/collection/308700/2000x1200?fed",
    "https://source.unsplash.com/collection/308700/2000x1200?die",
    "https://source.unsplash.com/collection/308700/2000x1200?any",
    "https://source.unsplash.com/collection/308700/2000x1200?wed",
    "https://source.unsplash.com/collection/308700/2000x1200?try",
  ]
  return (
    <Swiper {...params}>
      {images.map(img => <div key={img}><div style={{
        background: `url(${img}) no-repeat`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        height: '580px',
      }}></div></div>)}
    </Swiper>
  )
};
export default SpaceBetweenSlides;