import React from "react";
import { motion } from "framer-motion";
import "./OurTeam.css";
import { ourteamImages, BackgroundImageSlider } from "../BackgroundImageSlider";

function FeaturedMembers({ featuredMembers }) {
  return (
    <div className="featured-members-container">
      {featuredMembers.map((member, index) => (
        <div key={index} className="featured-member">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="featured-member-image"
          />
          <div className="featured-member-info">
            <h3 className="featured-member-name">{member.name}</h3>
            <div className="featured-member-title">
              {member.title.split(", ").map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeacherList({ teamMembers }) {
  return (
    <div className="teacher-list">
      {teamMembers.map((member, index) => (
        <div key={index} className="teacher-item">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="teacher-image"
          />
          <div className="teacher-name">
            {member.name.split(", ").map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div className="teacher-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
}

function SuccessStoriesList({ successStories }) {
  return (
    <div className="success-stories-container">
      {successStories.map((member, index) => (
        <div key={index} className="sucess-stories-item">
          <img
            src={member.imageUrl}
            alt={member.name}
            className="success-stories-image"
          />
          <div className="success-stories-name">
            {member.name.split(", ").map((part, index, array) => (
              <React.Fragment key={index}>
                {part}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
          <div className="success-stories-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
}

function OurTeam() {
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
      className="our-team-section"
    >
      <div className="our-team-section-header">
        <h1>Our Team</h1>
      </div>
      {/* <BackgroundImageSlider images={ourteamImages} /> */}
      <div className="our-team-section-header">
        <h2>Our Featured Members</h2>
      </div>
      <FeaturedMembers featuredMembers={featuredMembers} />
      <div className="our-team-section-header">
        <h2>Meet The Team</h2>
      </div>
      <TeacherList teamMembers={teamMembers} />
      <div className="our-team-section-header">
        <h2>From Students To Teachers</h2>
        <p className="our-team-section-description">
          In line with the EPIC method, these teachers showcase the heart of
          what we do: guiding students to become mentors. This full-circle
          experience is a testament to our dedication to developing learners who
          go on to lead and teach others.
        </p>
      </div>
      <SuccessStoriesList successStories={successStories} />
    </motion.div>
  );
}

const featuredMembers = [
  {
    name: "Kelvin Lim",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/kelvin.jpg",
    title: "Principal/, Secondary School Curriculum Head",
  },
  {
    name: "Kenneth Lim",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/kenneth-lim.jpg",
    title: "Primary School Curriculum Head",
  },
];

const teamMembers = [
  {
    name: "Anne Low, Math",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/anne-low.jpg",
  },
  {
    name: "Peter Fong, English/Science",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/peter-fong.jpg",
  },
  {
    name: "Yong Rui Xing, English",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/rui-xing.webp",
  },
];

const successStories = [
  {
    name: "Steven Seah, Math",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/steven-seah.jpg",
  },
  {
    name: "Ling Say Kiat, Math",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/ling-say-kiat.jpg",
  },
  {
    name: "Tan Yi Long, Physics/Chemistry",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/tan-yi-long.jpg",
  },
  {
    name: "Teoh Chee Hong, Math/Science",
    imageUrl: process.env.PUBLIC_URL + "/images/OurTeam/teoh-chee-hong.jpg",
  },
];

export default OurTeam;
