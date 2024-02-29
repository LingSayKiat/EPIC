import React from "react";
import Stats from "./Stats";
import TuitionRates from "./AboutUs/TuitionRates";
import { Schedule } from "./AboutUs/Schedule";
import Testimonials from "./AboutUs/Testimonials";
import { FAQPage } from "./FAQ";
import Contactus from "./ContactUs";

import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to The Epic Mind Learning Loft</h1>
        {/* Background image or slider component */}
        <div className="hero-content">
          {/* Add any additional text or buttons here */}
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="our-programs">
        <h2>Our Programs</h2>
        {/* Content about the programs */}
      </section>

      {/* Stats Section May not include this*/}
      <section className="stats">
        <Stats />
      </section>

      {/* Videos/Pictures Section */}
      <section className="media">
        <h2>Gallery</h2>
        {/* Video and picture content */}
      </section>

      {/* Unique Selling Points Section */}
      <section className="unique-selling-points">
        <h2>How Are We Different</h2>
        {/* Points that make your learning loft unique */}
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
        <Testimonials />
        {/* Testimonials and Reviews */}
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
