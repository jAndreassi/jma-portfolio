// import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "../pages/Home";
// import About from "../pages/About.jsx";
// import Projects from "../pages/Projects.jsx";
// import Contact from "../pages/Contact.jsx";
// import Resume from "../pages/Resume.jsx";
import Footer from "./Footer";
import { NavLink, Navbar } from "react-bootstrap";
import React from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

export default function Body() {
  return (
    <>
      <Header />
      <Home />
      {/* <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch> */}
      <Footer />
    </>
  );
}
