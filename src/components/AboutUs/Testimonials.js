import React from "react";
import Slider from "react-slick";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function TestimonialMember({ member }) {
  return (
    <div className="testimonial-member">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="testimonial-member-image"
      />
      <div className="testimonial-member-info">
        <h3>{member.name}</h3>
        <p>{member.description}</p>
      </div>
    </div>
  );
}
function Testimonials() {
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
        className="custom-arrow next-arrow-testimonial"
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
        className="custom-arrow prev-arrow-testimonial"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>{" "}
        {/* Add font-awesome icon for arrow */}
      </div>
    );
  }

  return (
    <div className="testimonials-section">
      <h2>Our Testimonials</h2>
      <Slider {...settings}>
        {testimonialMembers.map((member, index) => (
          <div key={index}>
            <TestimonialMember member={member} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Testimonials Data
const testimonialMembers = [
  { name: "Jia Hao", description: "Hello", imageUrl: "/images/jiahao.jpg" },
  { name: "Say Kiat", description: "Testing", imageUrl: "" },
];

export default Testimonials;
