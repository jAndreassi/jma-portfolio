import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>Jared Andreassi</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/About">
              <h2>About</h2>
            </Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Resume">Resume</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
