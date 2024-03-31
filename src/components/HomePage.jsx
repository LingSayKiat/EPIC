import React, { useState, useEffect } from "react";
import Seo from "./Seo";
import { motion } from "framer-motion";
import { homepageImages, BackgroundImageSlider } from "./BackgroundImageSlider";
import { HeroMessage } from "./HeroMessage";
import { Stats } from "./Stats";
import { Rates } from "./OurPrograms/TuitionRates";
import { TimeTable } from "./OurPrograms/Schedule";
import { testimonialMembers, TextTestimonials } from "./AboutUs/Testimonials";
import { FAQPage } from "./FAQ";
import { GoogleForm, ContactUs } from "./ContactUs";
import "./HomePage.css";
import Framework from "./Framework";

function HomePage() {
  const scrollToForm = () => {
    const formElement = document.getElementById("google-form");
    formElement.scrollIntoView({ behavior: "smooth" });
  };

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <div className="homepage">
      <section className="background-image-slider">
        <BackgroundImageSlider images={homepageImages} />
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="scroll-top-btn"
          onClick={scrollTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          ↑
        </motion.button>
      )}

      {/* Floating Sign Up Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="floating-sign-up-btn"
        onClick={scrollToForm}
      >
        Sign Up
      </motion.button>

      <section className="seo">
        <Seo />
      </section>

      {/* Mission Vision */}
      <section className="hero-message">
        <HeroMessage />
      </section>

      {/* Stats Section */}
      <section className="stats">
        <Stats />
      </section>

      {/* Framwork */}
      <section className="framework">
        <Framework />
      </section>

      {/* Pricing */}
      <section className="tuition-rates">
        <Rates />
      </section>

      {/* Schedule */}
      <section className="schedule">
        <TimeTable />
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <TextTestimonials testimonials={testimonialMembers} />
      </section>

      {/* FAQs */}
      <section className="faq-page">
        <FAQPage />
      </section>

      {/* Google Form */}
      <section className="google-form" id="google-form">
        <GoogleForm />
      </section>

      {/* Booking Form */}
      <section className="contact-us">
        <ContactUs />
      </section>
    </div>
  );
}

export default HomePage;
