import React from "react";
import Slider from "react-slick";
import { Stats } from "./Stats";
import TuitionRates from "./OurPrograms/TuitionRates";
import Schedule from "./OurPrograms/Schedule";
import { TestimonialMember, testimonialMembers } from "./AboutUs/Testimonials";
import { FAQPage } from "./FAQ";
import Contactus from "./ContactUs";

import "./HomePage.css";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrowText />,
    prevArrow: <PrevArrowText />,
  };

  function NextArrowText(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow-text"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrowText(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow-text"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  return (
    <div className="homepage">
      {/* Mission Vision */}
      <section className="hero-section">
        <h1>Welcome to The Epic Mind Learning Loft</h1>
        {/* Background image or slider component */}
        <div className="hero-content">
          {/* Add any additional text or buttons here */}
        </div>
      </section>

      {/* Unique Selling Points Section */}
      <section className="unique-selling-points">
        <h2>How Are We Different</h2>
        {/* Points that make your learning loft unique */}
      </section>

      {/* Stats Section May not include this*/}
      <section className="stats">
        <Stats />
      </section>

      {/* Pricing */}
      <section className="tution-rates">
        <TuitionRates />
      </section>

      {/* Schedule */}
      <section className="schedule">
        <Schedule />
        {/* Schedule for parents to look at */}
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <Slider {...settings}>
          {testimonialMembers.map((member, index) => (
            <div key={index}>
              <TestimonialMember member={member} />
            </div>
          ))}
        </Slider>
        {/* Testimonials and Reviews */}
      </section>

      {/* Videos/Pictures Section */}
      <section className="media">
        <h2>Gallery</h2>
        {/* Video and picture content */}
      </section>

      {/* FAQs */}
      <section className="faqs">
        <FAQPage />
      </section>

      {/* Booking Form */}
      <section className="contact-us">
        <Contactus />
      </section>
    </div>
  );
}

export default HomePage;
