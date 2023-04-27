import "../assets/css/home.css";
import React from "react";
import home from "../assets/images/home.portfolio.jpeg";

export default function Home() {
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <img
          src={home}
          alt="Coding image"
          style={{ display: "block", width: "100%", height: "100%" }}
        />
        <div
          className="Intro"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            textAlign: "center",
            fontSize: "3em",
          }}>
          Hello and Welcome to Jared Andreassi's portfolio! I'm new at coding
          but I'm learning and getting better everyday.
        </div>
      </div>
    </>
  );
}
