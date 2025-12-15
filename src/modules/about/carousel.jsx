import React from 'react';
import Slider from 'react-slick';
import './carousel.css';
import img1 from '../../assets/Photos/cmnd.jpg';
import img2 from '../../assets/Photos/IMG_8097.jpeg';
import img3 from '../../assets/Photos/IMG_8100.jpeg';
import img4 from '../../assets/Photos/IMG_8166.jpeg';
import img5 from '../../assets/Photos/IMG_8241.jpeg';
import img6 from '../../assets/Photos/zrkd.jpg';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    autoplaySpeed: 3000, // time between slides (ms)
    pauseOnHover: true, // pause when mouse is over
    pauseOnFocus: true, // pause when focused (accessibility)
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={img1} alt='image1'></img>
      </div>
      <div>
        <img src={img2} alt='image2'></img>
      </div>
      <div>
        <img src={img3} alt='image3'></img>
      </div>
      <div>
        <img src={img4} alt='image4'></img>
      </div>
      <div>
        <img src={img5} alt='image5'></img>
      </div>
      <div>
        <img src={img6} alt='image6'></img>
      </div>
    </Slider>
  );
}
