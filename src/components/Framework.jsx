import React from "react";
import "./Framework.css";

function Framework() {
  return (
    <section className="how-we-do-it-container">
      <h1>How We Do It?</h1>
      <div className="expectation-container">
        <div className="expectation-item">
          <i className="fa-solid fa-book-open icon"></i>
          <h3>Academic</h3>
          <p>
            Our academic programs are personalised to challenge and stimulate
            students, ensuring they grasp the fundamentals and excel in their
            exams.
          </p>
        </div>
        <div className="expectation-item">
          <i className="fa-solid fa-brain icon"></i>
          <h3>Aptitude</h3>
          <p>
            We focus on developing students' natural talents and strengths,
            encouraging a deep understanding and love for the subject.
          </p>
        </div>
        <div className="expectation-item">
          <i className="fa-solid fa-heart icon"></i>
          <h3>Attitude</h3>
          <p>
            A positive mindset is crucial for success. Our approach nurtures
            students' confidence and resilience, preparing them for academic and
            life challenges.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Framework;
