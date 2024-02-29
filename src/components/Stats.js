import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stats.css";

function Stats() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        className="custom-arrow next-arrow-stats"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>{" "}
      </div>
    );
  }

  function PrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow-stats"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>{" "}
      </div>
    );
  }

  return (
    <div className="stats-section">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-slide"
            onClick={() => {
              setLightboxOpen(true);
              setActiveIndex(index);
            }}
          >
            <img
              src={testimonial.imageUrl}
              alt={testimonial.altText}
              className="testimonial-image"
            />
          </div>
        ))}
      </Slider>
      <Lightbox
        open={lightboxOpen}
        index={activeIndex}
        slides={testimonials.map((testimonial) => ({
          src: testimonial.imageUrl,
          alt: testimonial.altText,
        }))}
        close={() => setLightboxOpen(false)}
      />
    </div>
  );
}

const testimonials = [
  {
    imageUrl: "/images/jiahao.jpg",
    altText: "First testimonial description",
  },
  {
    imageUrl: "/images/jiahao.jpg",
    altText: "Second testimonial description",
  },
  // ... other testimonials
];

export default Stats;
