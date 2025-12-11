import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageCarousel from './image-carousel';
import InfoPopup from './info-popup';
import { useState } from 'react';

const AboutPage = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container className='mt-5'>
      <Row className='text-center mb-4'>
        <Col xs={12}>
          <h1 className='mb-2'>BlackHawks</h1>
          <p className='lead'>
            A team of seven people ready to embrace a path full of programming and camunda challenges!
          </p>
        </Col>
      </Row>
      <Row className='justify-content-center mb-4'>
        <Col xs={12} md={6} className='d-flex justify-content-center'>
          <div>
            <ImageCarousel />
          </div>
        </Col>
      </Row>
      <Row className='' style={{ paddingTop: '130px' }}>
        <Col xs={12} md={4}>
          <ul className='list-unstyled'>
            <li>
              <button
                onClick={() => setModalShow(true)}
                className='btn btn-link p-0'
                style={{ textDecoration: 'underline', color: 'green' }}>
                Open Links
              </button>
            </li>

            <li>
              <a href='https://github.com/Black-Hawks-Codeworks/frontend' target='_blank' rel='noopener noreferrer'>
                <img
                  src='src/assets/images/github.png'
                  style={{ height: '60px', width: '60px' }}
                  alt='Εικόνα συνδέσμου προς GitHub'
                />
              </a>
            </li>
            <li>
              <a
                href='https://www.notion.so/CAPSTONE-PROJECT-BlackHawks-29957318d7e8804193bcda91e31ff7d4'
                target='_blank'
                rel='noopener noreferrer'>
                <img
                  src='src/assets/images/notion.png'
                  style={{ height: '60px', width: '60px' }}
                  alt='Εικόνα συνδέσμου προς Notion'
                />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <InfoPopup show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default AboutPage;
