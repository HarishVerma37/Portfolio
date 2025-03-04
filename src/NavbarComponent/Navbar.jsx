import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

useEffect(()=>{
  
  window.addEventListener("onmouseenter", ()=>{
    setMenuOpen(!menuOpen);
  });
  
}, [menuOpen]);
  return (
    <div className="containern">
      <div className="navbar">
        <NavLink to="/" className="navbar-brand">Harish</NavLink>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={menuOpen ? "line line1 active" : "line line1"}></span>
          <span className={menuOpen ? "line line2 active" : "line line2"}></span>
          <span className={menuOpen ? "line line3 active" : "line line3"}></span>
        </div>

        {/* Navbar Links */}
        <div className={`navbar-nav ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="navbar-brand">Home</NavLink>
          <NavLink to="/Skills" onClick={toggleMenu}>Skills</NavLink>
          <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
          <NavLink to="/About" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/contactMe" onClick={toggleMenu}>ContactMe</NavLink>
        </div>
      </div>
    </div>
    
  );
}
