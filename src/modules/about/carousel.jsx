import React from 'react';
import Slider from 'react-slick';
import styles from './carousel.module.css';

import img1 from '../../assets/Photos/cmnd.jpg';
import img2 from '../../assets/Photos/IMG_8097.jpeg';
import img3 from '../../assets/Photos/IMG_8100.jpeg';
import img4 from '../../assets/Photos/IMG_8166.jpeg';
import img5 from '../../assets/Photos/IMG_8241.jpeg';
import img6 from '../../assets/Photos/zrkd.jpg';
import img7 from '../../assets/Photos/ilias.png';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div className={styles.root}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img className={styles.img} src={img1} alt='image1' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={img2} alt='image2' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={img3} alt='image3' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={img4} alt='image4' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={img5} alt='image5' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={img6} alt='image6' />
        </div>
        <div className={styles.slide}>
          <img className={styles.img} src={img7} alt='image7' />
        </div>
      </Slider>
    </div>
  );
}
