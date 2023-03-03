import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;