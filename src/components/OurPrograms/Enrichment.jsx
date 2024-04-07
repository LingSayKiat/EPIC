import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Enrichment.css";

function Enrichment() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

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
        <h1 className="enrichment-title">Enrichment Classes</h1>
        <div className="class-list">
          {classesInfo.map((classItem, index) => (
            <div
              key={index}
              className="class-item"
              onClick={() => openLightbox(index)}
            >
              <img
                src={classItem.imageUrl}
                alt={classItem.title}
                className="class-image"
              />
              <h3>{classItem.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={classesInfo.map((item) => ({ src: item.imageUrl }))}
          index={activeIndex}
        />
      )}
    </motion.div>
  );
}

const classesInfo = [
  {
    title: "P6 Math Master",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/P6-Math.png",
  },
  {
    title: "Secondary 1/2 Kelgebra Masterclass",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/S1_2-Algebra.png",
  },
  {
    title: "Secondary 1 Science Workshop",
    imageUrl:
      process.env.PUBLIC_URL + "/images/Enrichment/S1-Science-Class.png",
  },
  {
    title: "O-level Math Crash Course",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/S4-Math-Crash-Course.png",
  },
];

export default Enrichment;
