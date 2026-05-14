import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <a href="#" className="navbar_logo">
        Doodle
      </a>

      <div className="navbar_links">
        <a href="#" className="navbar_link navbar_link--active">
          Photos
        </a>
        <a href="#" className="navbar_link">
          Illustrations
        </a>
        <a href="#" className="navbar_link">
          3D
        </a>
      </div>

      <a href="#" className="navbar_cta">
        Contact
      </a>

      <button
        className={`navbar_menu-btn ${isOpen ? "navbar_menu-btn--open" : ""}`}
        aria-label="Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile overlay */}
      <div className={`navbar_mobile ${isOpen ? "navbar_mobile--open" : ""}`}>
        <div className="navbar_mobile-bg"></div>
        <div className="navbar_mobile-panel">
          <nav className="navbar_mobile-nav">
            <a
              href="#photos"
              className="navbar_mobile-link navbar_mobile-link--active"
              onClick={closeMenu}
            >
              Photos
            </a>
            <a
              href="#illustrations"
              className="navbar_mobile-link"
              onClick={closeMenu}
            >
              Illustrations
            </a>
            <a
              href="#threed"
              className="navbar_mobile-link"
              onClick={closeMenu}
            >
              3D
            </a>
          </nav>
          <a href="#" className="navbar_mobile-cta" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
