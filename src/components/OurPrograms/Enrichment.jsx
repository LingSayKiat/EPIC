import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Enrichment.css";

function Enrichment() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const openSignUpForm = (url) => {
    window.open(url, "_blank");
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrowEnrichment />,
    prevArrow: <PrevArrowEnrichment />,
  };

  function NextArrowEnrichment(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow-enrichment"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrowEnrichment(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow-enrichment"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

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
        <h1 className="enrichment-title">Enrichment and Special Programmes</h1>
        {/* React Slick Slider */}
        <Slider {...sliderSettings} className="enrichment-class-slider">
          {sliderInfo.map((classItem, index) => (
            <div key={index} className="encrichment-class-item">
              <img
                src={classItem.imageUrl}
                alt={classItem.title}
                className="enrichment-class-image"
              />
            </div>
          ))}
        </Slider>
        <button
          onClick={() => openSignUpForm(sliderInfo[activeIndex].signUpLink)}
          className="sign-up-btn slider-sign-up-btn"
        >
          Sign Up
        </button>
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openSignUpForm(classItem.signUpLink);
                }}
                className="sign-up-btn"
              >
                Sign Up
              </button>
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

const sliderInfo = [
  {
    title: "Holiday Immersion Programme",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/Promo-1.jpg",
    signUpLink:
      "https://docs.google.com/forms/d/1UoIijTuUrybeDitzhL3zb7b75K4GlpqNM2HUpu5JD_A/edit?usp=forms_home&ths=true",
  },
  {
    title: "EPIC Holiday Revision is Here!",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/Promo-2.jpg",
    signUpLink:
      "https://docs.google.com/forms/d/1UoIijTuUrybeDitzhL3zb7b75K4GlpqNM2HUpu5JD_A/edit?usp=forms_home&ths=true",
  },
  {
    title: "Secondary 1 Math Preparation",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/Promo-3.jpg",
    signUpLink:
      "https://docs.google.com/forms/d/1UoIijTuUrybeDitzhL3zb7b75K4GlpqNM2HUpu5JD_A/edit?usp=forms_home&ths=true",
  },
];

const classesInfo = [
  {
    title: "Phonics",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/Phonics.jpg",
    signUpLink:
      "https://docs.google.com/forms/d/1UoIijTuUrybeDitzhL3zb7b75K4GlpqNM2HUpu5JD_A/edit?usp=forms_home&ths=true",
  },
];

export default Enrichment;
