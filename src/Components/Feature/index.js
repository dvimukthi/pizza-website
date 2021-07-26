import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

function Feature() {
  return (
    <FeatureContainer>
      <h1>Pizza Of the Day</h1>
      <p>Truffle Alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}

export default Feature;
