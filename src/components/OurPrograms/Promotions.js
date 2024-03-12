import React from "react";
import { motion } from "framer-motion";
import "./Promotions.css";

function Promotions() {
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
      className="promotions-container"
    >
      <section className="holiday-classes">
        <h2 className="holiday-classes-title">Holiday Classes</h2>
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

      <section className="special-discounts">
        <h2 className="special-discounts-title">Special Discounts</h2>
        <p>Sign up now and get a 10% discount on all holiday classes!</p>
        <p>Refer a friend and both of you will receive a special gift!</p>
      </section>

      <section className="upcoming-events">
        <h2 className="upcoming-events-title">Upcoming Events</h2>
        <ul className="events-list">
          <li>
            <strong>Open House:</strong> Visit us on January 5th for a tour and
            meet our teachers.
          </li>
          <li>
            <strong>Parents' Day:</strong> A day for parents to participate in
            classes on February 10th.
          </li>
        </ul>
      </section>
    </motion.div>
  );
}
export default Promotions;
