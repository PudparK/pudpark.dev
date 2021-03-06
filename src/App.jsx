import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

// layout-components
import Header from "component/Header";
import Container from "component/Container";
// CSS
import "./App.css";

// dotenv
require("dotenv").config({ path: __dirname + "/.env" });

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
