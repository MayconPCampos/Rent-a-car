import React from "react";
import Card from "../molecules/Card";
import { cards } from "../../data";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const Cards = () => {
  return (
    <Container>
      {cards.map((card) => (
        <Card
          title={card.title}
          text={card.description}
          img={card.image}
          link={card.link}
        />
      ))}
    </Container>
  );
};

export default Cards;
