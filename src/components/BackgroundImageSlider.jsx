import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "./BackgroundImageSlider.css";

function shuffleArray(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function BackgroundImageSlider({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 15,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: false,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    pauseOnHover: false,
  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const shuffledImages = shuffleArray([...images]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1.2 }}
      variants={variants}
      className="background-image-slider"
    >
      <Slider {...settings}>
        {shuffledImages.map((image, index) => (
          <div key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </motion.div>
  );
  // return (
  //   <motion.div
  //     initial="hidden"
  //     whileInView="visible"
  //     viewport={{ once: false }}
  //     transition={{ duration: 1.2 }}
  //     variants={variants}
  //     className="background-image-slider"
  //     style={{
  //       backgroundImage: `url(${images.src})`,
  //       backgroundSize: "cover",
  //       backgroundPosition: "center",
  //       width: "100%",
  //       height: "80vh",
  //     }}
  //   ></motion.div>
  // );
}

const homepageImage = [
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/2024-batch.jpg",
    alt: "Homepage Image",
  },
];

const homepageImages = [
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/2021-batch.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_0477.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_2453.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_2908.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4065.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4272.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4308.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4714.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4718.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5204.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5450.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_6333.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_9492.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/photo163774271.jpeg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/photo1637742711.jpeg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/photo1666344596.jpeg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_0661.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_2668.JPG",
    alt: "Image",
  },

  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_2982.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4693.JPG",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4887.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4890.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4966.jpg",
    alt: "Image",
  },

  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4967.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5117.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5138.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5992.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_9203.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/photo_2024-03-10_12-44-42.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_2450.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_4154.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5124.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/IMG_5733.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Homepage/photo_2024-03-10_12-44-44.jpg",
    alt: "Image",
  },
];

const testimonialsImages = [
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Testimonials/IMG_0781.jpg",
    alt: "Image 2",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Testimonials/IMG_1043.jpg",
    alt: "Image 2",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Testimonials/IMG_2452.jpg",
    alt: "Image 2",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Testimonials/IMG_3030.jpg",
    alt: "Image 2",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Testimonials/IMG_4923.jpg",
    alt: "Image 2",
  },
];

const ourteamImages = [
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Testimonials/IMG_1043.jpg",
    alt: "Image 2",
  },
];

const alumindImages = [
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4703.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4304.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4142.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4145.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4147.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4150.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4302.jpg",
    alt: "Image",
  },

  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4695.jpg",
    alt: "Image",
  },

  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4704.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4705.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4706.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4707.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4708.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4709.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_4711.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_6253.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_0494.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_0504.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_0516.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_0647.jpg",
    alt: "Image",
  },
  {
    src:
      process.env.PUBLIC_URL +
      "/images/BackgroundPictures/Alumind/IMG_0672.jpg",
    alt: "Image",
  },
];

export {
  homepageImage,
  homepageImages,
  testimonialsImages,
  ourteamImages,
  alumindImages,
  BackgroundImageSlider,
};
