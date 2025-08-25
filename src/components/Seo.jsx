import React from "react";
import "./Seo.css";
import { motion } from "framer-motion";

function Seo() {
  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/1JxciREcyXzSu4S8wr82cZ5p7R6qsVhX8Ky2N4Xv3Co8/edit",
      "_blank"
    );
  };

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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="seo-sign-up-btn"
          onClick={openGoogleForm}
        >
          Ask Us Anything!
        </motion.button>
      </div>
    </>
  );
}

export default Seo;
