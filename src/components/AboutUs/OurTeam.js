import React, { useRef } from "react";
import Slider from "react-slick";
import "./OurTeam.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function TeacherList({ teamMembers, onTeacherClick }) {
  return (
    <div className="teacher-list">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="teacher-item"
          onClick={() => onTeacherClick(index)}
        >
          <img
            src={member.imageUrl}
            alt={member.name}
            className="teacher-image"
          />
          <div className="teacher-name">{member.name}</div>
          <div className="teacher-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
}

function TeamMember({ member }) {
  return (
    <div className="team-member">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="team-member-image"
      />
      <div className="team-member-info">
        <h3>{member.name}</h3>
        <p>{member.description}</p>
      </div>
    </div>
  );
}

function OurTeam() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function NextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>{" "}
        {/* Add font-awesome icon for arrow */}
      </div>
    );
  }

  function PrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>{" "}
        {/* Add font-awesome icon for arrow */}
      </div>
    );
  }

  // Function to navigate to the slide that corresponds to the clicked teacher
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="our-team-section">
      <div className="our-team-section-header-1">
        <h2>Our Featured Members</h2>
      </div>
      <FeaturedMembers featuredMembers={featuredMembers} />
      <div className="our-team-section-header-2">
        <h2>Meet Our Team</h2>
      </div>
      <TeacherList teamMembers={teamMembers} onTeacherClick={goToSlide} />
      <div className="our-team-section-header-3">
        <h3>Learn More About Our Team</h3>
      </div>
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index}>
            <TeamMember member={member} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// OurTeam Data
const teamMembers = [
  {
    name: "Kelvin Lim",
    description:
      "Proud father of two boys. Armed with a degree in Computer Engineering in NTU. Nearly 20 years of experience as a tutor.",
    imageUrl: "/images/kelvin-lim.jpg",
    title: "Principal",
  },
  {
    name: "Kenneth Lim",
    description:
      "Founder and creator of online Mathematics learning portal Shoheuken.com, Kenneth is always pioneering new ideas.",
    imageUrl: "/images/kenneth-lim.jpg",
    title: "Lead Teacher",
  },
  {
    name: "Anne",
    description:
      "Post-Graduate Diploma in Education with NIE. Ex-MOE Secondary School Teacher. More than 15 years of tutoring experience under her belt. Post-Graduate Diploma in Education with NIE. Ex-MOE Secondary School Teacher. More than 15 years of tutoring experience under her belt. Post-Graduate Diploma in Education with NIE. Ex-MOE Secondary School Teacher. More than 15 years of tutoring experience under her belt.",
    imageUrl: "/images/kelvin-lim.jpg",
    title: "Lead Teacher",
  },

  // ... more team members
];

const featuredMembers = [
  {
    name: "Kelvin Lim",
    description:
      "Proud father of two boys. Armed with a degree in Computer Engineering in NTU. Nearly 20 years of experience as a tutor.",
    imageUrl: "/images/kelvin-lim.jpg",
    title: "Principal",
  },
];

export default OurTeam;
