import styled from "styled-components";

export const Text = styled.p`
  line-height: 1.5rem;
  color: #191509;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "fjallaOne";
    text-transform: uppercase;
  }

  h1 {
    font-size: 2rem;
    margin: 15px 0px;
  }
`;

export const Bold = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #191509;
`;

export const SlideText = styled.p`
  font-family: "fjallaOne";
  font-size: 4rem;
  text-transform: uppercase;
  text-shadow: 2px 2px #191509;
  color: #fff;
  line-height: 1.2;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
`;

export default Text;
