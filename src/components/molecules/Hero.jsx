import React from "react";
import { SlideText } from "../atoms/Font";
import styled from "styled-components";
import Booker from "../organisms/Booker";

import Carousel from "react-bootstrap/Carousel";

const Section = styled.div`
  .carousel-caption {
    text-align: left;
    left: 5%;
    bottom: 10%;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Carousel fade controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./assets/slide01.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <SlideText>
              <p>
                Exclusive & low cost<br></br> car rental
              </p>
            </SlideText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./assets/slide02.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <SlideText>
              <p>
                Exclusive & low cost<br></br> car rental
              </p>
            </SlideText>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./assets/slide03.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <SlideText>
              <p>
                Exclusive & low cost<br></br> car rental
              </p>
            </SlideText>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Booker />
    </Section>
  );
};

export default Hero;
