import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../assets/css/home.css";

function ColorSchemesExample() {
  return (
    <>
      <Navbar
        variant="dark"
        style={{
          backgroundColor: "black",
          position: "fixed",
          width: "100%",
          top: 0,
        }}>
        <Container>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}>
            <h3>Jared Andreassi</h3>
          </Link>
          <Nav
            className="me-auto"
            style={{
              marginLeft: "8em",
            }}>
            <Link
              to="/About"
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "1em",
              }}>
              <h5>About</h5>
            </Link>
            <Link
              to="/Projects"
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "1em",
              }}>
              <h5>Projects</h5>
            </Link>
            <Link
              to="/Contact"
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "1em",
              }}>
              <h5>Contact</h5>
            </Link>
            <Link
              to="/Resume"
              style={{
                color: "white",
                textDecoration: "none",
                marginLeft: "1em",
              }}>
              <h5>Resume</h5>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
