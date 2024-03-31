import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} The EPIC MIND. All Rights Reserved.</p>
        <NavLink to="/PrivacyPolicy">Privacy Policy</NavLink>
      </div>
    </footer>
  );
}

export default Footer;
