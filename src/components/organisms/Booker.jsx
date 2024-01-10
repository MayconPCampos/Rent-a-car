import React from "react";
import styled from "styled-components";
import { SlideText, Text } from "../atoms/Font";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  background-color: #141311;
  padding: 5%;

  .subtitle {
    color: #fff;
    text-transform: uppercase;
    border-bottom: 5px solid #ffd018;
    padding-bottom: 5px;
  }

  .label {
    color: #bbb;
  }

  .submit-btn {
    background-color: #ffd018;
    border: none;
    border-radius: 0px;
    color: #333;
    width: 100%;
    padding: 15px;
    margin-top: 30px;
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const Booker = () => {
  return (
    <Container>
      <SlideText>Rent a car</SlideText>
      <Text className="subtitle">Calculate & Book</Text>
      <Form.Group className="mb-3">
        <Form.Label className="label">Car types</Form.Label>
        <Form.Select>
          <option>All car types</option>
          <option>Premium Car</option>
          <option>Sport Car</option>
        </Form.Select>
        <Form.Label className="label">Car brands</Form.Label>
        <Form.Select>
          <option>All car brands</option>
          <option>Mazda</option>
          <option>Toyota</option>
        </Form.Select>
        <Form.Label className="label">Car model</Form.Label>
        <Form.Select>
          <option>All car models</option>
          <option>Model 1</option>
          <option>Model 2</option>
        </Form.Select>
        <Button type="submit" className="submit-btn">
          Book now
        </Button>
      </Form.Group>
    </Container>
  );
};

export default Booker;
