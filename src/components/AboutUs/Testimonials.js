import React, { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

function TestimonialScreenShots({ testimonials }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  function NextArrowScreenShots(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow-screenshots"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrowScreenShots(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow-screenshots"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrowScreenShots />,
    prevArrow: <PrevArrowScreenShots />,
  };

  return (
    <div className="testimonial-screen-shot-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-screen-shot-slide"
            onClick={() => {
              setLightboxOpen(true);
              setActiveIndex(index);
            }}
          >
            <img
              src={testimonial.imageUrl}
              alt={testimonial.altText}
              className="testimonial-screen-shot-image"
            />
          </div>
        ))}
      </Slider>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          index={activeIndex}
          slides={testimonials.map((testimonial) => ({
            src: testimonial.imageUrl,
            alt: testimonial.altText,
          }))}
          close={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}

function TestimonialMember({ member }) {
  return (
    <div className="testimonial-member">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="testimonial-member-image"
      />
      <div className="testimonial-member-info">
        <h3 className="testimonial-member-name">{member.name}</h3>
        <p className="testimonial-member-description">{member.description}</p>
      </div>
    </div>
  );
}

function VideoTestimonial({ videos }) {
  function NextArrowVideo(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow next-arrow-video"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  }

  function PrevArrowVideo(props) {
    const { style, onClick } = props;
    return (
      <div
        className="custom-arrow prev-arrow-video"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrowVideo />,
    prevArrow: <PrevArrowVideo />,
  };

  return (
    <div className="video-testimonial-container">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-testimonial-slide">
            <video controls className="testimonial-video">
              <source src={video.videoUrl} type="video/mp4" />
              {video.altText}
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function Testimonials() {
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

  return (
    <div className="testimonials-section">
      <h2>Our Testimonials</h2>
      <TestimonialScreenShots testimonials={testimonialsScreenShots} />
      <Slider {...settings}>
        {testimonialMembers.map((member, index) => (
          <div key={index}>
            <TestimonialMember member={member} />
          </div>
        ))}
      </Slider>
      <VideoTestimonial videos={testimonialMembers} />
    </div>
  );
}

const testimonialsScreenShots = [
  {
    imageUrl: "/images/Testimonials/ScreenShots/emtp-issac-toh.jpg",
    altText: "EMTP Issac Toh 22S2",
  },
  {
    imageUrl: "/images/Testimonials/ScreenShots/emtp-rayyan.jpg",
    altText: "EMTP Rayyan 23S3",
  },
  {
    imageUrl: "/images/Testimonials/ScreenShots/emtp-rayyan.jpg",
    altText: "EMTP Rayyan 23S3",
  },
];

// Testimonials Data
const testimonialMembers = [
  {
    name: "Jia Hao",
    description: "Hello",
    imageUrl: "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
];

export {
  Testimonials,
  TestimonialScreenShots,
  testimonialsScreenShots,
  TestimonialMember,
  testimonialMembers,
};