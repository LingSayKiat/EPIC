import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Stats.css";
import {
  TestimonialScreenShots,
  testimonialsScreenShots,
} from "./AboutUs/Testimonials";

function Chart({ data, color, title }) {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={90}
          endAngle={-270}
          innerRadius={80}
          outerRadius={105}
          fill={color}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fillColor} />
          ))}
        </Pie>
        <text
          x="50%"
          y="50%"
          dy={8}
          textAnchor="middle"
          fill={color}
          style={{ fontSize: "30px", fontWeight: "bold" }}
        >
          {`${data[0].value.toFixed(1)}%`}
        </text>
        <text
          x="50%"
          y="50%"
          dy={25}
          textAnchor="middle"
          fill="white"
          style={{ fontSize: "20px" }}
        >
          {title}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

function EpicMethodStatement() {
  return (
    <div className="epic-method-statement">
      Leveraging the EPIC Method™, we make academic excellence achievable and
      stress-free
    </div>
  );
}

function Widgets() {
  return (
    <div className="stats-section">
      <h2 className="widgets-title">Our Impact in Numbers</h2>
      <div className="stats-grid">
        {/* Students Taught */}

        <div className="stat-item">
          <i className="fas fa-user-graduate fa-3x"></i>
          <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
            {({ isVisible }) => (
              <div className="stat-value">
                {isVisible ? <CountUp end={2000} duration={1} /> : "0"}+
              </div>
            )}
          </VisibilitySensor>
          <div className="stat-label">Students Mentored</div>
        </div>
        {/* Distinction Rate */}

        <div className="stat-item">
          <i className="fa-solid fa-star fa-3x"></i>
          <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
            {({ isVisible }) => (
              <div className="stat-value">
                {isVisible ? (
                  <CountUp end={75.3} decimals={1} duration={1.5} />
                ) : (
                  "0"
                )}
                %
              </div>
            )}
          </VisibilitySensor>
          <div className="stat-label">Distinction Rate</div>
        </div>
        {/* Improvement Rate */}

        <div className="stat-item">
          <i className="fa-solid fa-school fa-3x"></i>
          <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
            {({ isVisible }) => (
              <div className="stat-value">
                {isVisible ? (
                  <CountUp end={98.1} decimals={1} duration={1.5} />
                ) : (
                  "0"
                )}
                %
              </div>
            )}
          </VisibilitySensor>
          <div className="stat-label">Improvement</div>
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
        variants={variants}
        className="stats-main-div"
      >
        <div className="stats-title">
          <h1>Our National Exam Average Distinction Rate Since 2016</h1>
        </div>
        <div className="charts-container">
          <Chart data={PrimarySchool} color="#F1FF3F" title="PSLE" />
          <Chart data={SecondarySchool} color="#F1FF3F" title="O/N Levels" />
          <Chart data={JuniorCollege} color="#F1FF3F" title="A Levels" />
        </div>
        <EpicMethodStatement />
        <Widgets />
        <TestimonialScreenShots testimonials={testimonialsScreenShots} />
      </motion.div>
    </>
  );
}

const PrimarySchool = [
  { name: "Filled", value: 90.2, fillColor: "#66CC99" },
  { name: "Unfilled", value: 100 - 90.2, fillColor: "#D3D3D3" },
];

const SecondarySchool = [
  { name: "Filled", value: 94.8, fillColor: "#66CC99" },
  { name: "Unfilled", value: 5.2, fillColor: "#D3D3D3" },
];

const JuniorCollege = [
  { name: "Filled", value: 85.5, fillColor: "#66CC99 " },
  { name: "Unfilled", value: 14.5, fillColor: "#D3D3D3" },
];

export { Chart, Widgets, Stats };
