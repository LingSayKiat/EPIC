import React from "react";
import "./Seo.css";

function Seo() {
  return (
    <>
      <div className="seo-title-container">
        <h1 className="seo-title">
          Leading Tuition Centre in Singapore Since 2004
        </h1>
      </div>
      <div className="seo-section">
        <p className="seo-description">
          Whether it's acing O & A Levels or mastering subjects from Maths to
          Science and English, EpicMind is your gateway to academic excellence.
          With competitive tuition fees, our dedicated team ensures personalized
          learning experiences that cater to every student’s unique potential.
          Enroll now and join the ranks of top performers in Singapore!
        </p>
        <a
          href="https://wa.me/+6584444550"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
          WhatsApp Us
        </a>
      </div>
    </>
  );
}

export default Seo;
