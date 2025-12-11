import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCarousel from './image-carousel';
import InfoPopup from './info-popup';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { RiNotionFill } from 'react-icons/ri';

const AboutPage = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className='container'>
      <div className='row text-center mb-4'>
        <div className='col-12'>
          <h1 className='mb-2'>BlackHawks</h1>
          <p className='lead'>
            A team of seven people ready to embrace a path full of programming and camunda challenges!
          </p>
        </div>
      </div>
      <div className='row justify-content-center mb-4'>
        <div className='col-12' style={{ maxWidth: '300px' }}>
          <ImageCarousel />
        </div>
      </div>
      <div className='row' style={{ paddingTop: '30px' }}>
        <div className='col-12 col-md-4'>
          <ul className='list-unstyled'>
            <li>
              <Button
                onClick={() => setModalShow(true)}
                className='btn btn-link p-0'
                style={{ textDecoration: 'underline', color: 'black' }}>
                <FaLinkedin style={{ width: '70px', height: '70px' }} />
              </Button>
            </li>

            <li>
              <Button
                href='https://github.com/Black-Hawks-Codeworks'
                target='_blank'
                className='btn btn-link p-0'
                style={{ textDecoration: 'underline', color: 'black' }}>
                <FaGithub style={{ width: '70px', height: '70px' }} />
              </Button>
              {/*               <a href='https://github.com/Black-Hawks-Codeworks/frontend' target='_blank' rel='noopener noreferrer'>
                <img
                  src='src/assets/images/github.png'
                  style={{ height: '60px', width: '60px' }}
                  alt='Εικόνα συνδέσμου προς GitHub'
                />
              </a> */}
            </li>
            <li>
              <Button
                href='https://www.notion.so/CAPSTONE-PROJECT-BlackHawks-29957318d7e8804193bcda91e31ff7d4'
                target='_blank'
                className='btn btn-link p-0'
                style={{ textDecoration: 'underline', color: 'black' }}>
                <RiNotionFill style={{ width: '70px', height: '70px' }} />
              </Button>
              {/*               <a
                href='https://www.notion.so/CAPSTONE-PROJECT-BlackHawks-29957318d7e8804193bcda91e31ff7d4'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='src/assets/images/notion.png'
                  style={{ height: '60px', width: '60px' }}
                  alt='Εικόνα συνδέσμου προς Notion'
                />
              </a> */}
            </li>
          </ul>
        </div>
      </div>
      <InfoPopup show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default AboutPage;
