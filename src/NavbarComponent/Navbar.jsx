// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

// useEffect(()=>{
  
//   window.addEventListener("onmouseenter", ()=>{
//     setMenuOpen(!menuOpen);
//   });
  
// }, [menuOpen]);
//   return (
//     <div className="containern">
//       <div className="navbar">
//         <NavLink to="/" className="navbar-brand">Harish</NavLink>

//         {/* Hamburger Menu Icon */}
//         <div className="hamburger" onClick={toggleMenu}>
//           <span className={menuOpen ? "line line1 active" : "line line1"}></span>
//           <span className={menuOpen ? "line line2 active" : "line line2"}></span>
//           <span className={menuOpen ? "line line3 active" : "line line3"}></span>
//         </div>

//         {/* Navbar Links */}
//         <div className={`navbar-nav ${menuOpen ? "open" : ""}`}>
//         <NavLink to="/" className="navbar-brand">Home</NavLink>
//           <NavLink to="/Skills" onClick={toggleMenu}>Skills</NavLink>
//           <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
//           <NavLink to="/About" onClick={toggleMenu}>About</NavLink>
//           <NavLink to="/contactMe" onClick={toggleMenu}>ContactMe</NavLink>
//         </div>
//       </div>
//     </div>
    
//   );
// }





import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Effect for toggling menu on hover (optional)
  useEffect(() => {
    const handleMouseEnter = () => {
      setMenuOpen(true);
    };

    // Add the event listener for mouse enter
    window.addEventListener("mouseenter", handleMouseEnter);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);  // Empty dependency array ensures this runs once when component mounts

  return (
    <div className="navbar-container">
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
