import React from "react";
import styled from "styled-components";
import { Text } from "../atoms/Font";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Container = styled.div`
  background-color: #141311;
  box-sizing: border-box;
  padding: 5%;

  @media screen and (min-width: 1172px) {
    position: absolute;
    padding: 30px;
    width: 25%;
    height: auto;
    top: 20%;
    right: 5%;
    z-index: 1;
  }

  @media screen and (max-width: 1500px) and (min-width: 1172px) {
    padding: 15px;
    padding-bottom: 10px;
    top: 16%;
  }

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
    color: #191509;
    width: 100%;
    padding: 10px;
    margin: 0;
    margin-top: 20px;
    font-family: "fjallaOne";
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .booker-label {
    font-family: "fjallaOne";
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px #191509;
    color: #fff;
    line-height: 1.2;
  }
`;

const Booker = () => {
  return (
    <Container>
      <p className="booker-label">Rent a car</p>
      <Text className="subtitle">Calculate & Book</Text>
      <Form.Group>
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
          Search
        </Button>
      </Form.Group>
    </Container>
  );
};

export default Booker;
