import React from "react";
import { HeroMessage } from "./HeroMessage";
import { Stats } from "./Stats";
import TuitionRates from "./OurPrograms/TuitionRates";
import Schedule from "./OurPrograms/Schedule";
import { testimonialMembers, TextTestimonials } from "./AboutUs/Testimonials";
import { FAQPage } from "./FAQ";
import Contactus from "./ContactUs";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      {/* Background Image Section */}
      <div className="background-image-section">
        {/* Intentionally left empty if no content is to be overlaid */}
      </div>

      {/* Mission Vision */}
      <section className="hero-message">
        <HeroMessage />
      </section>

      {/* Stats Section */}
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
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <TextTestimonials testimonials={testimonialMembers} />
      </section>

      {/* Videos/Pictures Section */}
      <section className="media">
        <h2>Gallery</h2>
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
