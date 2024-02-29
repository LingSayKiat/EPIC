import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Functions to handle mouse events
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            The Epic Mind Learning Loft
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/AboutUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us <i className="fas fa-caret-down" />
              </Link>
              {dropdown && (
                <div className="dropdown-content">
                  <Link
                    to="/AboutUs/TuitionRates"
                    className="dropdown-link"
                    onClick={closeMobileMenu}
                  >
                    Tuition Rates
                  </Link>
                  <Link
                    to="/AboutUs/Schedule"
                    className="dropdown-link"
                    onClick={closeMobileMenu}
                  >
                    Schedule
                  </Link>
                  <Link
                    to="/AboutUs/Testimonials"
                    className="dropdown-link"
                    onClick={closeMobileMenu}
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/AboutUs/OurTeam"
                    className="dropdown-link"
                    onClick={closeMobileMenu}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link
                to="/OurPrograms"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/FAQ" className="nav-links" onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
