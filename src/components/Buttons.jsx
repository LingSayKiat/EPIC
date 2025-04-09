import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Buttons.css";

function Buttons({ children }) {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openGoogleForm = () => {
    window.open(
      "https://docs.google.com/forms/d/1JxciREcyXzSu4S8wr82cZ5p7R6qsVhX8Ky2N4Xv3Co8/edit",
      "_blank"
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <div>
      {children}

      {showScroll && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="scroll-top-btn"
          onClick={scrollToTop}
        >
          ↑
        </motion.button>
      )}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="floating-sign-up-btn"
        onClick={openGoogleForm}
      >
        Sign Up
      </motion.button>
    </div>
  );
}

export default Buttons;
