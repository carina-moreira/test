import "./App.css";
import "./styles/variables.scss";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.js";
import Home from "./pages/Home/Home.jsx";
import AboutMe from "./pages/AboutMe/AboutMe.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

const AppContent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const pageElement = document.querySelector(".page");
    const bodyElement = document.body;

    if (isMenuOpen) {
      pageElement.classList.add("menu-open");
      bodyElement.classList.add("no-scroll");
    } else {
      pageElement.classList.remove("menu-open");
      bodyElement.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getPageStyle = () => {
    switch (location.pathname) {
      case "/":
        return "homepage";
      case "/aboutme":
        return "about";
      default:
        return "";
    }
  };

  return (
    <div className={`page ${getPageStyle()}`}>
      <ThemeProvider>
        <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
