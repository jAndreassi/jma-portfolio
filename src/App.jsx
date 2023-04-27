import "./App.css";
import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/Resume" element={<Resume />} />
        </Routes>
        <Routes>
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
