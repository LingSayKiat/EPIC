import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => setDropdown(false);

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
                to="/"
                className="nav-links"
                activeclassname="active"
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            {/* About Us Dropdown */}
            <li
              className="nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <a href="#!" className="nav-links" onClick={toggleDropdown}>
                About Us <i className="fas fa-caret-down" />
              </a>
              {dropdown && (
                <div className="dropdown-content">
                  <NavLink
                    to="/AboutUs/Testimonials"
                    className="dropdown-link"
                    activeclassname="active"
                    onClick={closeMobileMenu}
                  >
                    Testimonials
                  </NavLink>
                  <NavLink
                    to="/AboutUs/OurTeam"
                    className="dropdown-link"
                    activeclassname="active"
                    onClick={closeMobileMenu}
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
              <a href="#!" className="nav-links" onClick={toggleDropdown}>
                Our Programs <i className="fas fa-caret-down" />
              </a>
              {dropdown && (
                <div className="dropdown-content">
                  <NavLink
                    to="/OurPrograms/TuitionRates"
                    className="dropdown-link"
                    activeclassname="active"
                    onClick={closeMobileMenu}
                  >
                    Tuition Rates
                  </NavLink>
                  <NavLink
                    to="/OurPrograms/Schedule"
                    className="dropdown-link"
                    activeclassname="active"
                    onClick={closeMobileMenu}
                  >
                    Schedule
                  </NavLink>
                  <NavLink
                    to="/OurPrograms/Promotions"
                    className="dropdown-link"
                    activeclassname="active"
                    onClick={closeMobileMenu}
                  >
                    Promotions
                  </NavLink>
                </div>
              )}
            </li>
            <li className="nav-item">
              <NavLink
                to="/FAQ"
                className="nav-links"
                activeclassname="active"
                onClick={closeMobileMenu}
              >
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/ContactUs"
                className="nav-links"
                activeclassname="active"
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
