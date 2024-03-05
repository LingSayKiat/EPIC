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
      {filteredRatesData.map(
        (
          rate // Map over filteredRatesData
        ) => (
          <div key={rate.level} className="rate-level">
            <h2>{rate.level}</h2>
            <div className="rate-cards-container">
              {rate.subjects.map(
                (
                  subject // Map over subjects of each rate
                ) => (
                  <div key={subject.name} className="rate-card">
                    <h3>{subject.name}</h3>
                    <p>${subject.price}/month</p>
                    <ul className="rate-card-bonus">
                      {subject.bonus.map((bonusItem, index) => (
                        <li key={index}>{bonusItem}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
const ratesData = [
  {
    level: "Primary School",
    subjects: [
      {
        name: "English",
        price: 150,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Math",
        price: 150,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Science",
        price: 150,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
    ],
  },
  {
    level: "Secondary School",
    subjects: [
      {
        name: "English",
        price: 180,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "S1/2 Math",
        price: 180,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "A/E Math",
        price: 200,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "S1/2 Science",
        price: 180,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Physics/Chemistry",
        price: 200,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
    ],
  },
  {
    level: "Junior College",
    subjects: [
      {
        name: "H1/H2 Math",
        price: 250,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Physics/Chemistry",
        price: 250,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
    ],
  },
];

export default TuitionRates;
