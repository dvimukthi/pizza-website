import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Components/Hero";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
    </Router>
  );
}

export default App;
