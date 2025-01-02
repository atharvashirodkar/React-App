// src/MenuBar.js
import React, { useState } from "react";
import "./MenuBar.css";

const MenuBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="menu-bar">
      <div className="logo">MyApp</div>
      <ul className={`menu-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default MenuBar;
