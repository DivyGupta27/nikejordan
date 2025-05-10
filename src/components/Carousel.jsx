// Carousel.js
import React from "react";
import Slider from "react-slick";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

import img5 from '../assets/img5.jpg'
// import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
// import img9 from '../assets/img9.jpg'
import img0 from '../assets/img0.jpg'

const images = [img1, img2, img3,img5,img7,img8,img0];
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 3 seconds
    pauseOnHover: true,
  };

  return (
    <div className="w-full object-fit mx-auto p-4">
      <Slider {...settings}>
      {images.map((src, index) => (
  <div key={index}>
    <img
      src={src}
      alt={`Slide ${index + 1}`}
      className="w-full h-90 object-cover rounded-lg"
    />
  </div>
))}
      </Slider>
    </div>
  );
};

export default Carousel;
