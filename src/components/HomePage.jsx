import React from "react";
import Seo from "./Seo";
import { homepageImage, BackgroundImageSlider } from "./BackgroundImageSlider";
import { HeroMessage } from "./HeroMessage";
import { Stats } from "./Stats";
import { Rates } from "./OurPrograms/TuitionRates";
import { TimeTable } from "./OurPrograms/Schedule";
import {
  TagembedWidget,
  testimonialMembers,
  TextTestimonials,
} from "./AboutUs/Testimonials";
import { FAQPage } from "./FAQ";
import { GoogleForm, ContactUs } from "./ContactUs";
import "./HomePage.css";
import Framework from "./Framework";

function HomePage() {
  return (
    <div className="homepage">
      <section className="seo">
        <Seo />
      </section>

      <section className="background-image-slider">
        <BackgroundImageSlider images={homepageImage} />
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

      {/* Google Reviews */}
      <section className="google-reviews">
        <TagembedWidget />
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
