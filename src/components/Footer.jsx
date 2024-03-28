import React from "react";
import "./Footer.css"; // Your footer CSS

function Footer() {
  const year = new Date().getFullYear(); // Gets the current year

  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {year} The EPIC MIND. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
