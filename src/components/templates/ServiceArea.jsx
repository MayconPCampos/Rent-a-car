import React from "react";
import { states, services } from "../../data";
import styled from "styled-components";
import { Title } from "../atoms/Font";

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const States = styled.div`
  background-color: #141311;
  display: flex;
  flex-direction: column;
  padding: 40px;

  a {
    color: #adaba6;
    text-decoration: none;
  }

  h2 {
    color: #fff;
  }
`;

const Services = styled.div`
  background-color: #2a2927;
`;

const ServiceArea = () => {
  return (
    <Container>
      <States>
        <Title>
          <h2>Service Area</h2>
        </Title>
        {states.map((states) => (
          <a href="#">{states}</a>
        ))}
      </States>
      <Services>
        {services.map((services) => (
          <div>
            <div>{services.title}</div>
            <div>{services.description}</div>
            <div>{services.image}</div>
          </div>
        ))}
      </Services>
    </Container>
  );
};

export default ServiceArea;
