import React, { useState } from "react";
import "./TuitionRates.css";

function TuitionRates() {
  // State to hold the currently selected level
  const [selectedLevel, setSelectedLevel] = useState("Primary School");

  // Function to update the selected level
  const selectLevel = (level) => {
    setSelectedLevel(level);
  };

  // Function to filter rates data based on the selected level
  const filteredRatesData = ratesData.filter((rate) =>
    selectedLevel === "All" ? true : rate.level === selectedLevel
  );

  return (
    <div className="rates-container">
      <div className="rates-buttons">
        <button onClick={() => selectLevel("Primary School")}>Primary</button>
        <button onClick={() => selectLevel("Secondary School")}>
          Secondary
        </button>
        <button onClick={() => selectLevel("Junior College")}>
          Junior College
        </button>
      </div>
      {filteredRatesData.map((level) => (
        <div key={level.level} className="rate-level">
          <h2>{level.level}</h2>
          <div className="rate-cards-container">
            {level.subjects.map((subject) => (
              <div key={subject.name} className="rate-card">
                <h3>{subject.name}</h3>
                <p>${subject.price}/month</p>
                <button className="sign-up-btn">Sign Up</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
const ratesData = [
  {
    level: "Primary School",
    subjects: [
      { name: "English", price: 150 },
      { name: "Math", price: 150 },
      { name: "Science", price: 150 },
    ],
  },
  {
    level: "Secondary School",
    subjects: [
      { name: "English", price: 180 },
      { name: "S1/2 Math", price: 180 },
      { name: "A/E Math", price: 200 },
      { name: "S1/2 Science", price: 180 },
      { name: "Physics/Chemistry", price: 200 },
    ],
  },
  {
    level: "Junior College",
    subjects: [
      { name: "H1/H2 Math", price: 250 },
      { name: "Physics/Chemistry", price: 250 },
    ],
  },
];

export default TuitionRates;
