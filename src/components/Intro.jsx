import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Carousel1 from "../../public/Carousel 01.svg";
import Carousel2 from "../../public/Carousel 02.svg";
import Carousel3 from "../../public/Carousel 03.svg";
import Carousel4 from "../../public/Carousel 04.svg";
import '../styles/Intro.css';

const Intro = () => {
  return (
    <section id="intro" className="intro-section">
      <Carousel fade indicators={false} controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel1}
            alt="First slide"
            style={{ height: '810px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel2}
            alt="Second slide"
            style={{ height: '810px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel3}
            alt="Third slide"
            style={{ height: '810px', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Carousel4}
            alt="Fourth slide"
            style={{ height: '810px', objectFit: 'cover' }}
          />
        </Carousel.Item>
      </Carousel>
      <div className="logo-container">
        <img src="path_to_logo.png" alt="Kastara logo" className="logo" />
      </div>
    </section>
  );
};

export default Intro;
