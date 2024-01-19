import React from "react";
import { states, services } from "../../data";
import styled from "styled-components";
import { Title } from "../atoms/Font";

const ServicesContainer = styled.div`
  display: flex;
  max-height: 650px;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    max-height: 100%;
  }
`;

const StatesSection = styled.div`
  background-color: #141311;
  display: flex;
  flex-direction: column;
  padding: 5%;
  width: 100%;
  max-height: 100%;

  a {
    color: #adaba6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h2 {
    color: #fff;
  }
`;

const StatesList = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 100%;
  padding-bottom: 40px;

  a {
    margin: 0 10px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    max-height: 700px;
  }
`;

const Services = styled.div`
  background-color: #2a2927;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;

  p {
    color: #fff;
  }

  .service {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

const ServiceArea = () => {
  return (
    <ServicesContainer>
      <StatesSection>
        <Title id="service-area">
          <h2>Service Area</h2>
        </Title>
        <StatesList>
          {states.map((states) => (
            <a href="#service-area">{states}</a>
          ))}
        </StatesList>
      </StatesSection>
      <Services>
        {services.map((services) => (
          <div>
            <p className="service">{services.title}</p>
            <p>{services.description}</p>
            <img src={services.image}></img>
          </div>
        ))}
      </Services>
    </ServicesContainer>
  );
};

export default ServiceArea;
