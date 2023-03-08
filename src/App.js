import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="relative">
        <Header className="z-10" />

        <div className="bg-primary-100 dark:bg-primary-900 relative z-0 bg-gradient-to-tr from-alt-300 via-primary-200 to-primary-300 dark:from-alt-800 dark:via-primary-700 dark:to-primary-900">
          <Routes>
            <Route path="/" element={<About className="z-10" />} />
            <Route path="/projects" element={<Projects className="z-10" />} />
            <Route path="/contact" element={<Contact className="z-10" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
