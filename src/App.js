import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home-page";
import Note from "./Pages/note-page";
import About from "./Pages/about-page";
import Contact from "./Pages/contact-page";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Note" element={<Note />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    // <Home />
  );
}
