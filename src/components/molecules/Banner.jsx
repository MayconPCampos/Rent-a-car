import React, { useEffect } from "react";
import styled from "styled-components";
import { SlideText } from "../atoms/Font";
import Button from "../atoms/Button";

const Parallax = styled.div`
  width: 100%;
  height: 100%;
  background: url("./assets/parallax1.jpg") no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-x: 50%;
`;

const ParallaxLayer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: start;
  padding: 0 10%;
  font-size: 2rem;

  span {
    color: #f2c40e;
  }

  .banner-btn {
    color: #fff;
    border: 2px solid #fff;
    padding: 20px 30px;
  }

  .banner-btn:hover {
    background-color: #f2c40e;
    color: #111;
    border-color: #f2c40e;

    a {
      color: #222;
    }
  }
  .banner-btn a {
    font-size: 1.2rem;
  }
`;

const Banner = () => {
  const handleScroll = () => {
    let parallax = document.querySelector(".parallax");
    if (window.innerWidth < 491) {
      parallax.style.backgroundPositionY = 2700 - window.scrollY * 0.8 + "px";
    } else if (window.innerWidth < 992) {
      parallax.style.backgroundPositionY = 2100 - window.scrollY * 0.8 + "px";
    } else if (window.innerWidth < 1172) {
      parallax.style.backgroundPositionY = 1550 - window.scrollY * 0.9 + "px";
    } else if (window.innerWidth < 1367) {
      parallax.style.backgroundPositionY = 1350 - window.scrollY * 0.9 + "px";
    } else {
      parallax.style.backgroundPositionY = 1150 - window.scrollY * 0.8 + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Parallax className="parallax">
        <ParallaxLayer>
          <SlideText>
            <p>Premium cars</p>
            <p className="banner-price">
              Starting from <span>$99/day</span>
            </p>
            <Button className="banner-btn">
              <a href="">More details</a>
            </Button>
          </SlideText>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Banner;
