import React from "react";

function products() {
  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>
        {DataCue.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
}

export default products;
