import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function TextControlsExample() {
  return (
    <div
      style={{
        margin: "8em",
        color: "#133955",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h4>Send me an email.</h4>
      </div>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name here"
            pattern="[A-Za-z]+"
            style={{ border: "2px solid black" }}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            style={{ border: "2px solid black" }}
            required
            title="Please enter a valid email address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Please write email here. Thank you!</Form.Label>
          <Form.Control
            as="textarea"
            rows={12}
            style={{ border: "2px solid black" }}
          />
        </Form.Group>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Button variant="dark">Send Email</Button>{" "}
      </div>
    </div>
  );
}

export default TextControlsExample;
