import React from "react";
import "./HeroMessage.css";

function Message() {
  return (
    <>
      <h1 className="message-title">Principal's Message</h1>
      <div className="message-container">
        <div className="content">
          <img
            src="images/OurTeam/kelvin-lim.jpg"
            alt="Principal"
            className="image"
          />
          <div className="message-text">
            <h2 className="message-dear-students">
              Dear Students and Parents,{" "}
            </h2>
            <p>
              <div className="mission-title">Mission</div>
              <br />
              "Empowerment Through Education: With our EPIC method, we enhance
              the three R's—Results, Relationships, and Resilience. Our
              supportive, results-oriented approach is designed to elevate
              grades, forge lasting connections, and instill resilience,
              preparing students for a successful future."
            </p>
            <p>
              <div className="vision-title">Vision</div>
              <br />
              "Inspiring Futures, Cultivating Dreams: We aim to nurture a
              community that not only fosters innovation and personal growth but
              also paves the way for 10,000 entrepreneurs to thrive."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Framework() {
  return (
    <div className="framework-container">
      <h2 className="framework-title">EPIC Method™</h2>
      <p className="framework-description">
        <strong>The EPIC Method™</strong> is your pathway to success. Here's how
        we break it down:
      </p>
      <ul className="framework-list">
        <li>
          <strong>Effort:</strong> Commitment to personal best and continuous
          improvement.
        </li>
        <li>
          <strong>Purpose:</strong> Learning with clear goals and intentions.
        </li>
        <li>
          <strong>Information:</strong> Mastery of knowledge through innovative
          teaching strategies.
        </li>
        <li>
          <strong>Courage:</strong> Bravery to face challenges and embrace new
          ideas.
        </li>
      </ul>
      <p className="framework-summary">
        By harnessing the power of <strong>Effort</strong> to dive deep into{" "}
        <strong>Information</strong>, and channeling it with a clear{" "}
        <strong>Purpose</strong> while bolstered by <strong>Courage</strong>,
        our students don't just learn—they excel. Join us and be part of the
        success story where academic achievement is not just a goal, but a
        reality.
      </p>
    </div>
  );
}

function HeroMessage() {
  return (
    <>
      <Message />
      <Framework />
    </>
  );
}

export { Message, Framework, HeroMessage };
