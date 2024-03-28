import React from "react";
import { motion } from "framer-motion";
import "./Enrichment.css";

function Enrichment() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1.2 }}
      variants={variants}
      className="enrichment-container"
    >
      <section className="holiday-classes">
        <h1 className="enrichment-title">Holiday Classes</h1>
        <div className="class-list">
          <div className="class-item">
            <h3>Math Mastery Workshop</h3>
            <p>
              Join us this holiday for a math workshop that makes learning fun
              and engaging!
            </p>
            <span className="date">December 15 - December 19</span>
            <span className="age-group">Ages 12-15</span>
          </div>
          <div className="class-item">
            <h3>Science Exploration Days</h3>
            <p>
              Explore the wonders of science with hands-on activities and
              experiments.
            </p>
            <span className="date">November 20 - November 24</span>
            <span className="age-group">Ages 10-13</span>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
export default Enrichment;
