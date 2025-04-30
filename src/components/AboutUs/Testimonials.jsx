import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "./Testimonials.css";
import "../BackgroundImageSlider.css";
import {
  testimonialsImages,
  BackgroundImageSlider,
} from "../BackgroundImageSlider";

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

  useEffect(() => {
    if (hoveredTestimonial) {
      setSelectedTestimonial(hoveredTestimonial);
    }
  }, [hoveredTestimonial]);

  function handleSlideChange(oldIndex, newIndex) {
    setSelectedTestimonial(testimonials[newIndex]);
  }

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
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

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
      className="text-testimonial-container"
    >
      <Slider {...imageSliderSettings}>
        {testimonials.map(
          (testimonial, index) =>
            testimonial.description && (
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
            )
        )}
      </Slider>

      {/* Testimonial display */}
      {selectedTestimonial && selectedTestimonial.description && (
        <div className="testimonial-display">
          <h3 className="text-testimonial-name">{selectedTestimonial.name}</h3>
          <p className="text-testimonial-description">
            {selectedTestimonial.description}
          </p>
        </div>
      )}
    </motion.div>
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
  const videoTestimonialSettings = {
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
    <div className="video-testimonial-container" key={videos.length}>
      <Slider {...videoTestimonialSettings}>
        {videos.map(
          (video, index) =>
            video.videoUrl && (
              <div key={index} className="video-testimonial-slide">
                <video controls className="testimonial-video">
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
              </div>
            )
        )}
      </Slider>
    </div>
  );
}

function TagembedWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//widget.tagembed.com/embed.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="tagembed-widget" data-widget-id="2168250"></div>;
}

function Testimonials() {
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
      className="testimonials-section-slider"
    >
      <h1 className="main-testimonial-header">Our Testimonials</h1>
      <BackgroundImageSlider images={testimonialsImages} />
      <VideoTestimonial videos={testimonialVideos} />
      <TestimonialScreenShots testimonials={testimonialsScreenShots} />
      <TagembedWidget />
      <TextTestimonials testimonials={testimonialMembers} />
    </motion.div>
  );
}

const testimonialsScreenShots = [
  {
    imageUrl:
      process.env.PUBLIC_URL +
      "/images/Testimonials/ScreenShots/emtp-issac-toh.jpg",
    altText: "EMTP Issac Toh 22S2",
  },
  {
    imageUrl:
      process.env.PUBLIC_URL +
      "/images/Testimonials/ScreenShots/emtp-rayyan.jpg",
    altText: "EMTP Rayyan 23S3",
  },
  {
    imageUrl:
      process.env.PUBLIC_URL +
      "/images/Testimonials/ScreenShots/emtp-zhihui.jpg",
    altText: "EMTP Zhi Hui 23S3",
  },
];

// Testimonials Data
const testimonialMembers = [
  {
    name: "Jia Hao",
    displayname: "Jia Hao, Sec Math, Class of 2025",
    description:
      "Before coming to Epic Mind, I have always struggled with math no matter the topic, no matter what I did or how much effort I put into studying I would somehow always end up behind my class and that was when I started hating the subject as a whole which led to me doubting my ability to pass mathematics for PSLE, which is when my cousin who was an ex-student here, stepped in and introduced me to Epic Mind. I first came in as a Primary 6 student and where I met my first tutor here, Kenneth, who scared me a lot at first when I started coming for his sessions on sundays. He was firm while teaching which really helped with improving my mathematics and I could really see the difference from before and after coming here for lessons. He also had a website where you accumulated points for completing work and you could redeem those points for rewards which encouraged me to work harder to improve my math. As of now as a Secondary 3 student I still attend lessons here but under the watch of Kenneth’s brother, Kelvin who really helped with the transition to secondary school, his ways of teaching are … different but it is as effective or even more effective as it is captivating and fun to go through.Although still I wouldn’t say Mathematics is my favorite subject ,I can say I am doing a lot better than when I started.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/jiahao.jpg",
    videoUrl: process.env.PUBLIC_URL + "/videos/jiahao.mp4",
  },
  {
    name: "Valerie",
    displayname: "Valerie, Sec Math, Class of 2025",
    description:
      "Before I came to The Epic Mind, I used to HATE Math!!! Got stuck with problem sums and didn't know how to solve it 😣. When my parents brought me to this tuition centre, I found that the methods that they teach really helped me 👍, especially the OSEF method for solving the fractions when I did not know how to solve last time. The journey during the tuition was quite smooth and relaxing, own time, own target 👏. After being in this tuition for maybe a month, I realized that I understand math much better than I did last time and life has definitely become much better 😂LOL.  My grades have improved tremendously and I’m really happy for myself. My mindset also has changed to ‘ if you understand the formula, math just becomes easier’. One memorable thing is that I can do a few pages of the math assessment without making a lot of mistakes. 🥳and also have the confidence to teach others!",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/valerie.jpg",
    videoUrl: process.env.PUBLIC_URL + "/videos/jiahao.mp4",
  },
  {
    name: "Bryan Lawi",
    displayname: "Bryan Lawi, Sec Math, class of 2024",
    description:
      "Maths used to be a big headache for me. I was barely scraping by, with my grades hovering between 40-50%. After joining EpicMind, Math began to make more sense and exams didn’t seem so scary anymore. My grades began to improve to A1 which felt awesome. I’ve gotten really good at Math topics I used to struggle with. Furthermore, my own self confidence has also improved tremendously. I remember Kelvin telling me how doubting myself was like setting myself up for failure, no matter how smart I was. Additionally, paying 10 cents for every mistake I made helped to instil in me the importance of accountability. This whole experience has warped the way I look at Math and also how I see myself for the better.",
    imageUrl:
      process.env.PUBLIC_URL + "/images/Testimonials/Text/bryan-lawi.jpg",
    videoUrl: null,
  },
  {
    name: "Sheyanne",
    displayname: "Sheyanne, Pri Math, Class of 2022",
    description:
      "Before attending the tuition centre, Math was a subject I struggled with immensely, often finding myself stuck on various problems, leading to poor exam results—a truly frustrating experience. However, my perspective began to change after being introduced to Coach Kenneth. His guidance helped clarify complex concepts and improved my problem-solving skills. Gradually, I gained confidence and started setting higher goals for myself. Remarkably, the lessons learned during each tuition session stayed with me, allowing me to tackle homework with newfound interest and ease. Now, I find Math intriguing and manageable, eagerly anticipating each lesson with Kenneth.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/sheyanne.jpg",
    videoUrl: null,
  },
  {
    name: "You Hang",
    displayname: "You Hang, Sec Math, Class of 2025",
    description:
      "Attending Math lessons at EpicMind helped me to improve my grades from a mere 36%. Their personalised, step-by-step approach in a small-group setting not only made Math approachable but also fun. In just 2 months, my confidence has improved and I am not eyeing 100% with excitement. I also appreciate their holistic approach towards education which help to groom future-ready learners.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/you-hang.jpg",
    videoUrl: null,
  },
  {
    name: "Marino",
    displayname: "Marino, Sec Math, Class of 2023",
    description:
      "Kelvin's teaching style was a breath of fresh air. Instead of the usual stand-and-deliver method, he engaged with us individually, ensuring we understood each concept, even incentivizing success with rewards and imposing a playful penalty of 10 cents for careless mistakes—a quirky yet effective reminder to double-check our work. This approach transformed my outlook on Math and fostered unforgettable moments, from sharing meals to lifting weights and just being silly with Kelvin and friends. My time at The Epic Mind wasn't just educational; it was the highlight of my life, filled with laughter, learning, and growth.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/marino.jpg",
    videoUrl: null,
  },
  {
    name: "Yee Xuan",
    displayname: "Yee Xuan, Sec English, class of 2025",
    description:
      "Before I came to The Epic Mind, I didn't really like and struggled with English. I didn't understand how it works and I couldn't understand what my teacher in school was talking about. After coming for tuition, I understood more as Coach Peter explained it really well, he adjusted his teaching to my level and pace. I learnt how to answer the question using different methods and made an effort to improve my vocab. My grades improved and confidence too in 3 months, from constantly just passing to a B3. I'm actually quite satisfied at this point. For now, I think I kind of enjoy learning English and don't really hate it as much. One memorable thing is that I enjoy writing quick notes with him.",
    imageUrl:
      process.env.PUBLIC_URL + "/images/Testimonials/Text/yee-xuan.webp",
    videoUrl: null,
  },
  {
    name: "Kai Xuan",
    displayname: "Kai Xuan, Sec Math, Class of 2024",
    description:
      "During my time here, I improved my Math tremendously, my grades went from failing to getting As and Bs. In the past, when I encountered problems I could not solve on my own, I would rather give up than ask for help. But now, I am more proactive with seeking help for my problems. One memorable moment I had was when I got A during the end of year exams for Math, Kelvin offered his switch for me and the others at the centre to indulge in.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/kai-xuan.jpg",
    videoUrl: null,
  },
  {
    name: "Xin Yu",
    displayname: "Xin Yu, Sec Math, class of 2025",
    description:
      "Maths used to be a big headache for me. I was barely scraping by, with my grades hovering between 40-50%. After joining EpicMind, Math began to make more sense and exams didn’t seem so scary anymore. My grades began to improve to A1 which felt awesome. I’ve gotten really good at Math topics I used to struggle with. Furthermore, my own self confidence has also improved tremendously. I remember Kelvin telling me how doubting myself was like setting myself up for failure, no matter how smart I was. Additionally, paying 10 cents for every mistake I made helped to instil in me the importance of accountability. This whole experience has warped the way I look at Math and also how I see myself for the better.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/xin-yu.jpg",
    videoUrl: null,
  },

  {
    name: "Keaven",
    displayname: "Keaven, Sec Math, Class of 2022",
    description:
      "When I first arrived at The Epic Mind late in 2021, Math was a bit of a struggle, always finding myself stuck between B4 and C5. But this place is special; it lets you learn at your own beat, pushing hard or taking it easy whenever you need to. It wasn't just about Math; I learned to open up more, embracing new ideas, friends, and even a healthier lifestyle, inspired by the community here. 2022 was an adventure, full of hard graft and practice, but with the encouragement and support from both friends and mentors like Kel, it all felt worth it, especially as I saw my math grades jump to an A2 in my prelims. This journey's been about more than just academics; it's been about growing, finding a tribe, and even sneaking in epic Smash sessions with the crew—Haruki, Tye, and Ethan—before the O levels. As I wait for my final results, I'm grateful for the laughter, the lessons, and the leaps I've made here.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/keavan.jpg",
    videoUrl: null,
  },

  {
    name: "Jedrek",
    displayname: "Jedrek, Sec Math, Class of 2024",
    description:
      "Kenneth was a patient and professional teacher. He helped me to polish my Math concepts by identifying my weaknesses and then tackling them one at a time. He has helped to change my perspective on Math and it has now become my favourite subject in school. I managed to improve my grades from 60% (P4 MYE) to 85% (P6 Prelims) and finally achieving A in PSLE. I continued with EpicMind for Math tuition in secondary school. Similarly, Kelvin also had a knack for breaking things down and building my confidence by getting me to teach and help my friends. Over time, EpicMind has become more than just a tuition, it is also a place where I have made lifelong friends and learned lessons beyond just Math.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/jedrek.jpg",
    videoUrl: null,
  },
  {
    name: "Nicholas",
    displayname: "Nicholas, Sec Math, Class of 2024",
    description:
      "Before the tuition, I found Math confusing and I was afraid of trying as I constantly beat myself over failing. However, after starting this tuition, everything changed. They started to teach me step by step on my foundations and taught me tips and shortcuts to solve the questions quickly. After 2 months of hard work, i went from a fail to passing with flying colours . They also provided me with a strong community to help me better myself in both Math and my life. One such example of this is the epic fight club which motivated me to stay active and workout, improving my mental and physical wellbeing.",
    imageUrl: process.env.PUBLIC_URL + "/images/Testimonials/Text/nicholas.jpg",
    videoUrl: null,
  },
];

const testimonialVideos = [
  { videoUrl: process.env.PUBLIC_URL + "/videos/jiahao.mp4" },
  { videoUrl: process.env.PUBLIC_URL + "/videos/current-students-yt.mp4" },
  { videoUrl: process.env.PUBLIC_URL + "/videos/seth-sharing.mp4" },
];

export {
  Testimonials,
  TestimonialScreenShots,
  testimonialsScreenShots,
  TextTestimonials,
  testimonialMembers,
  VideoTestimonial,
  TagembedWidget,
};
