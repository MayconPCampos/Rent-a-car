import React from "react";
import styled from "styled-components";
import { SlideText } from "../atoms/Font";
import Button from "../atoms/Button";

const Background = styled.div`
  background: url("./assets/parallax1.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: start;
  padding: 0 20%;

  .banner-price {
    font-size: 2rem;
    span {
      color: #f2c40e;
    }
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
  }
  .banner-btn a {
    font-size: 1.2rem;
  }
`;

const Banner = () => {
  return (
    <Background>
      <SlideText>
        <p>Premium cars</p>
        <p className="banner-price">
          Starting from <span>$99/day</span>
        </p>
        <Button className="banner-btn">
          <a>More details</a>
        </Button>
      </SlideText>
    </Background>
  );
};

export default Banner;
