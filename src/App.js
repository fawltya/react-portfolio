import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="bg-gray-600">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
