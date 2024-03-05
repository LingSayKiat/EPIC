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
            <img
              src={"/images/epicmind-logo.jpg"}
              alt="The Epic Mind Learning Loft Logo"
            />
          </Link>
          <button className="menu-icon" onClick={handleClick}>
            {click ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
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
                to=""
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth < 960) {
                    setDropdown(!dropdown);
                  } else {
                    closeMobileMenu();
                  }
                }}
              >
                About Us <i className="fas fa-caret-down" />
              </Link>
              {dropdown && (
                <div className="dropdown-content">
                  <Link
                    to="/AboutUs/Testimonials"
                    className="dropdown-link"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/AboutUs/OurTeam"
                    className="dropdown-link"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to=""
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.innerWidth < 960) {
                    setDropdown(!dropdown);
                  } else {
                    closeMobileMenu();
                  }
                }}
              >
                Our Programs <i className="fas fa-caret-down" />
              </Link>
              {dropdown && (
                <div className="dropdown-content">
                  <Link
                    to="/OurPrograms/TuitionRates"
                    className="dropdown-link"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Tuition Rates
                  </Link>
                  <Link
                    to="/OurPrograms/Schedule"
                    className="dropdown-link"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Schedule
                  </Link>
                </div>
              )}
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
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
