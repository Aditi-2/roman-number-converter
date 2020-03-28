import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Converter from "./converter/converter";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Roman numbers</Navbar.Brand>
      </Navbar>
      <Converter />
    </div>
  );
}

export default App;
