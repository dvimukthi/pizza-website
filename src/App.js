import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Components/Hero";
import { GlobalStyle } from "./globalStyles";
import Products from "./Components/Products";
import { productData, productDataTwo } from "./Components/Products/data";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Products heading="Sweet Treats for you" data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
