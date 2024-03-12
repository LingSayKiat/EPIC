import React, { useState } from "react";
import { motion } from "framer-motion";
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
      className="rates-container"
    >
      <h1 className="rates-header">Tuition Rates</h1>
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
            <h2 className="rate-level-text">{rate.level}</h2>
            <div className="rate-cards-container">
              {rate.subjects.map(
                (
                  subject // Map over subjects of each rate
                ) => (
                  <div key={subject.name} className="rate-card">
                    <h3 className="rate-card-subject">{subject.name}</h3>
                    <p className="rate-card-price">${subject.price}/month</p>
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
    </motion.div>
  );
}
const ratesData = [
  {
    level: "Primary School",
    subjects: [
      {
        name: "English",
        price: 240,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Math",
        price: 240,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Science",
        price: 240,
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
        price: 340,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "S1/2 Math",
        price: 340,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "A/E Math",
        price: 360,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "A and E Math",
        price: 500,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "S1/2 Science",
        price: 340,
        bonus: [
          "Face to Face/Online Consultation",
          "Mathstery",
          "Personalized Coaching",
          "Customized Learning Resources",
        ],
      },
      {
        name: "Physics/Chemistry",
        price: 360,
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
