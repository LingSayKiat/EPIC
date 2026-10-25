import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Enrichment.css";

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

function Enrichment() {
  const [activeIndex1, setActiveIndex1] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);

  const openSignUpForm = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
      {/* Slider 1: Enrichment Programmes */}
      <section className="holiday-classes">
        <h1 className="enrichment-title">Enrichment Programmes</h1>

        <Slider
          {...sliderSettings}
          className="enrichment-class-slider"
          afterChange={(index) => setActiveIndex1(index)}
        >
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
          onClick={() => openSignUpForm(sliderInfo[activeIndex1].signUpLink)}
          className="sign-up-btn slider-sign-up-btn"
        >
          Sign Up
        </button>
      </section>

      {/* Slider 2: Trial Lessons */}
      <section className="holiday-classes second-enrichment-slider">
        <h1 className="enrichment-title">Trial Lessons</h1>

        <Slider
          {...sliderSettings}
          className="enrichment-class-slider"
          afterChange={(index) => setActiveIndex2(index)}
        >
          {trialLessonsInfo.map((classItem, index) => (
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
          onClick={() =>
            openSignUpForm(trialLessonsInfo[activeIndex2].signUpLink)
          }
          className="sign-up-btn slider-sign-up-btn"
        >
          Sign Up
        </button>
      </section>
    </motion.div>
  );
}

const sliderInfo = [
  {
    title: "Phonics-Promo",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/phonics-promo.jpg",
    signUpLink: "https://forms.gle/6cXezBNoJ3VHKWWp9",
  },
  {
    title: "Phonics-Promo",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/Phonics.jpg",
    signUpLink: "https://forms.gle/6cXezBNoJ3VHKWWp9",
  },
];

const trialLessonsInfo = [
  {
    title: "English Promo",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/english-trial.jpg",
    signUpLink: "https://forms.gle/6cXezBNoJ3VHKWWp9",
  },
  {
    title: "Math-Promo",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/math-trial.jpg",
    signUpLink: "https://forms.gle/6cXezBNoJ3VHKWWp9",
  },
  {
    title: "Science-Promo",
    imageUrl: process.env.PUBLIC_URL + "/images/Enrichment/science-trial.jpg",
    signUpLink: "https://forms.gle/6cXezBNoJ3VHKWWp9",
  },
];

export default Enrichment;
