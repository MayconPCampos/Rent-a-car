import styled from "styled-components";

const Button = styled.button`
  margin: 15px 0px;
  padding: 0px;
  border: none;
  background-color: transparent;

  a {
    font-family: "fjallaOne";
    font-size: 1.1rem;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: #838383;
    transition: color 0.5s;
  }

  a:hover {
    color: #f2c40e;
  }
`;

export default Button;
