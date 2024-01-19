import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Unstable_Grid2";
import Text, { Bold, Title } from "../atoms/Font";
import Button from "../atoms/Button";

const DescriptionSection = styled.div`
  padding: 5%;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin: 10px;
    cursor: pointer;
  }
`;

const AdvertisingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

const Description = () => {
  return (
    <DescriptionSection>
      <Grid container>
        <Grid xl={6} lg={12}>
          <div>
            <Title>
              <h1>Welcome to exclusive car rental</h1>
            </Title>
            <Bold>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              porttitor est lorem, eu tempor elit molestie tempus.
            </Bold>
            <Text>
              Sed porttitor est lorem, eu tempor elit molestie tempus. Donec
              molestie non arcu non aliquam. Fusce ante lectus, sagittis
              bibendum turpis non, blandit luctus ex. In rhoncus tincidunt nisl,
              vel consectetur augue vulputate eget. Nunc maximus turpis eget
              purus pharetra, posuere lacinia purus gravida. Ut sagittis
              pharetra quam, ut consequat mauris lobortis quis.
            </Text>
            <Button>
              <a href="#">Read more</a>
            </Button>
          </div>
        </Grid>
        <Grid container xl={6} lg={12}>
          <AdvertisingContainer container>
            <img src="./assets/banner1.jpg" alt="" />
            <img src="./assets/banner2.jpg" alt="" />
          </AdvertisingContainer>
        </Grid>
      </Grid>
    </DescriptionSection>
  );
};

export default Description;
