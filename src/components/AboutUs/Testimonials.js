import React, { useState, useEffect, useRef } from "react";
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

  const screenShotSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrowScreenShots />,
    prevArrow: <PrevArrowScreenShots />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-screen-shot-container">
      <Slider {...screenShotSettings}>
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

function TextTestimonials({ testimonials }) {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (hoveredTestimonial && selectedTestimonial !== hoveredTestimonial) {
      setSelectedTestimonial(hoveredTestimonial);
    }
  }, [hoveredTestimonial, selectedTestimonial]);

  function handleSlideChange(oldIndex, newIndex) {
    currentIndexRef.current = newIndex;
    setSelectedTestimonial(testimonials[newIndex]);
  }

  function NextArrowText(props) {
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

  function PrevArrowText(props) {
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

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 15000,
    nextArrow: <NextArrowText />,
    prevArrow: <PrevArrowText />,
    beforeChange: handleSlideChange,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: false,
          beforeChange: handleSlideChange,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          beforeChange: handleSlideChange,
        },
      },
    ],
  };

  return (
    <div className="text-testimonial-container">
      <Slider {...imageSliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="text-testimonial-slide"
            onMouseEnter={() => setHoveredTestimonial(testimonial)}
            onMouseLeave={() => setHoveredTestimonial(null)}
          >
            {hoveredTestimonial === testimonial ? (
              <div className="testimonial-hover-text">
                {testimonial.displayname
                  .split(", ")
                  .map((part, index, array) => (
                    <React.Fragment key={index}>
                      {part}
                      {index < array.length - 1 && <br />}
                    </React.Fragment>
                  ))}
              </div>
            ) : (
              <img
                src={testimonial.imageUrl}
                alt={testimonial.name}
                className="text-testimonial-image"
              />
            )}
          </div>
        ))}
      </Slider>

      {/* Testimonial display */}
      {selectedTestimonial && (
        <div className="testimonial-display">
          <h3 className="text-testimonial-name">{selectedTestimonial.name}</h3>
          <p className="text-testimonial-description">
            {selectedTestimonial.description}
          </p>
        </div>
      )}
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
  return (
    <div className="testimonials-section">
      <h2>Our Testimonials</h2>
      <TestimonialScreenShots testimonials={testimonialsScreenShots} />
      <TextTestimonials testimonials={testimonialMembers} />
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
    displayname: "Jia Hao, class of 2022",
    description: "Hello",
    imageUrl: "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    displayname: "Jia Hao, class of 2022",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/OurTeam/kelvin-lim.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Jia Hao",
    displayname: "Jia Hao, class of 2022",
    description: "Hello",
    imageUrl: "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    displayname: "Jia Hao, class of 2022",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/OurTeam/kenneth-lim.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    displayname: "Jia Hao, class of 2022",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/OurTeam/anne-low.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Jia Hao",
    displayname: "Jia Hao, class of 2022",
    description: "Hello",
    imageUrl: "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    displayname: "Jia Hao, class of 2022",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/OurTeam/kelvin-lim.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Jia Hao",
    displayname: "Jia Hao, class of 2022",
    description: "Hello",
    imageUrl: "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    displayname: "Jia Hao, class of 2022",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/OurTeam/kenneth-lim.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
  {
    name: "Say Kiat",
    displayname: "Jia Hao, class of 2022",
    description:
      "TestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTestingTesting",
    imageUrl: "/images/OurTeam/anne-low.jpg",
    videoUrl: "/Videos",
    altText: "Fill the up",
  },
];

export {
  Testimonials,
  TestimonialScreenShots,
  testimonialsScreenShots,
  TextTestimonials,
  testimonialMembers,
  VideoTestimonial,
};
