import React from "react";
import propTypes from "prop-types";

import Text, { Bold, Title } from "../atoms/Font";
import Button from "../atoms/Button";

const Description = () => {
  return (
    <>
      <div>
        <Title>
          <h1>Welcome to exclusive car rental</h1>
        </Title>
        <Bold>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor
          est lorem, eu tempor elit molestie tempus.
        </Bold>
        <Text>
          Sed porttitor est lorem, eu tempor elit molestie tempus. Donec
          molestie non arcu non aliquam. Fusce ante lectus, sagittis bibendum
          turpis non, blandit luctus ex. In rhoncus tincidunt nisl, vel
          consectetur augue vulputate eget. Nunc maximus turpis eget purus
          pharetra, posuere lacinia purus gravida. Ut sagittis pharetra quam, ut
          consequat mauris lobortis quis.
        </Text>
        <Button>
          <a href="#">Read more</a>
        </Button>
      </div>
      <div>
        <img src="./assets/banner1.jpg" alt="" />
        <img src="./assets/banner2.jpg" alt="" />
      </div>
    </>
  );
};

export default Description;
