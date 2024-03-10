import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  const toggleDropdown = (e) => {
    e.preventDefault();
    if (window.innerWidth < 960) {
      setDropdown(!dropdown);
    } else {
      closeMobileMenu();
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src={"/images/epicmind-logo.jpg"}
              alt="The Epic Mind Learning Loft Logo"
            />
          </NavLink>
          <button className="menu-icon" onClick={handleClick}>
            {click ? <span>&times;</span> : <span>&#9776;</span>}
          </button>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a
                href="/#"
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdown(!dropdown);
                }}
              >
                About Us <i className="fas fa-caret-down" />
              </a>
              {dropdown && (
                <div className="dropdown-content">
                  <NavLink
                    exact
                    to="/AboutUs/Testimonials"
                    className="dropdown-link"
                    activeClassName="active"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Testimonials
                  </NavLink>
                  <NavLink
                    exact
                    to="/AboutUs/OurTeam"
                    className="dropdown-link"
                    activeClassName="active"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Our Team
                  </NavLink>
                </div>
              )}
            </li>
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a
                href="/#"
                className="nav-links"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdown(!dropdown);
                }}
              >
                Our Programs <i className="fas fa-caret-down" />
              </a>
              {dropdown && (
                <div className="dropdown-content">
                  <NavLink
                    exact
                    to="/OurPrograms/TuitionRates"
                    className="dropdown-link"
                    activeClassName="active"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Tuition Rates
                  </NavLink>
                  <NavLink
                    exact
                    to="/OurPrograms/Schedule"
                    className="dropdown-link"
                    activeClassName="active"
                    onClick={() => {
                      setDropdown(false);
                      closeMobileMenu();
                    }}
                  >
                    Schedule
                  </NavLink>
                </div>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/FAQ"
                className="nav-links"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/ContactUs"
                className="nav-links"
                activeClassName="active"
                onClick={closeMobileMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
