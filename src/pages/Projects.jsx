import "../assets/css/home.css";
import React from "react";
import home from "../assets/images/home.portfolio.jpeg";

export default function Projects() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1em",
        }}>
        <h2>
          Hello and Welcome! This is Jared's Portfolio! I'm very new at coding
          but learning something new everyday!
        </h2>
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          paddingBottom: "5em",
        }}>
        <img src={home} alt="Coding image" style={{ display: "block" }} />
      </div>
    </>
  );
}
