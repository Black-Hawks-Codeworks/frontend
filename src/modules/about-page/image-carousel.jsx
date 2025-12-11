import React from 'react';
import { Carousel } from 'react-bootstrap';

function ImageCarousel() {
  return (
    <Carousel interval={3000} controls={true} indicators={true}>
      {' '}
      {/* 3 seconds */}
      <Carousel.Item>
        <img
          style={{ width: '300px', height: '400px', aspectRatio: '3:4' }}
          className='d-block w-100'
          src='src/assets/images/cmnd.jpg'
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '300px', height: '400px', aspectRatio: '3:4' }}
          className='d-block w-100'
          src='src/assets/images/IMG_8166.jpeg'
          alt='Second slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '300px', height: '400px', aspectRatio: '3:4' }}
          className='d-block w-100'
          src='src/assets/images/IMG_8097.jpeg'
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '300px', height: '400px', aspectRatio: '3:4' }}
          className='d-block w-100'
          src='src/assets/images/IMG_8100.jpeg'
          alt='Fourth slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: '300px', height: '400px', aspectRatio: '3:4' }}
          className='d-block w-100'
          src='src/assets/images/zrkd.jpg'
          alt='Fifth slide'
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;
