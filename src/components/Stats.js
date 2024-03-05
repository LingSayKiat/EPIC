import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
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
          innerRadius={70}
          outerRadius={80}
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
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {`${data[0].value.toFixed(1)}%`}
        </text>
        <text
          x="50%"
          y="50%"
          dy={25}
          textAnchor="middle"
          fill="#000"
          style={{ fontSize: "14px" }}
        >
          {title}
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

function Widgets() {
  return (
    <div className="stats-section">
      <h2>Our Impact in Numbers</h2>
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
  return (
    <>
      <div className="stats-title">
        <h1>Our National Exam Average Distinction Rate since 2016</h1>
      </div>
      <div className="charts-container">
        <Chart data={PrimarySchool} color="black" title="PSLE" />
        <Chart data={SecondarySchool} color="black" title="O/N Levels" />
        <Chart data={JuniorCollege} color="black" title="A Levels" />
      </div>
      <Widgets />
      <TestimonialScreenShots testimonials={testimonialsScreenShots} />
    </>
  );
}

const PrimarySchool = [
  { name: "Filled", value: 90.2, fillColor: "#0055B8" }, // Your filled percentage
  { name: "Unfilled", value: 100 - 90.2, fillColor: "#D3D3D3" }, // The unfilled portion
];

const SecondarySchool = [
  { name: "Filled", value: 94.8, fillColor: "#0055B8" },
  { name: "Unfilled", value: 5.2, fillColor: "#D3D3D3" },
];

const JuniorCollege = [
  { name: "Filled", value: 85.5, fillColor: "#0055B8" },
  { name: "Unfilled", value: 14.5, fillColor: "#D3D3D3" },
];

export { Chart, Widgets, Stats };
