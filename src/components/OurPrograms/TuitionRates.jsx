import React, { useState } from "react";
import { motion } from "framer-motion";
import "./TuitionRates.css";

function Rates() {
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

  const getButtonClass = (level) => {
    return `rates-button ${selectedLevel === level ? "active" : ""}`;
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
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => selectLevel("Primary School")}
          className={getButtonClass("Primary School")}
        >
          Primary
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => selectLevel("Secondary School")}
          className={getButtonClass("Secondary School")}
        >
          Secondary
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => selectLevel("Junior College")}
          className={getButtonClass("Junior College")}
        >
          Junior College
        </motion.button>
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
                    <div className="rate-card-content">
                      <h3 className="rate-card-subject">{subject.name}</h3>
                      <p className="rate-card-price">${subject.price}/lesson</p>
                      <ul className="rate-card-bonus">
                        {subject.bonus.map((bonusItem, index) => (
                          <li key={index}>
                            <span className="checkmark-circle">✔</span>{" "}
                            {bonusItem}
                          </li>
                        ))}
                      </ul>
                    </div>
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

function TuitionRates() {
  return (
    <>
      <Rates />
    </>
  );
}

const ratesData = [
  {
    level: "Primary School",
    subjects: [
      {
        name: "English",
        price: 60,
        bonus: [
          "1.5h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "Math",
        price: 60,
        bonus: [
          "1.5h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "Science",
        price: 60,
        bonus: [
          "1.5h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
    ],
  },
  {
    level: "Secondary School",
    subjects: [
      {
        name: "English",
        price: 90,
        bonus: [
          "2h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "S1/2 Math",
        price: 100,
        bonus: [
          "2h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "A/E Math",
        price: 100,
        bonus: [
          "2h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Mathstery",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "A and E Math Combo Package Deal",
        price: 135,
        bonus: [
          "3h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Mathstery",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "S1/2 Science",
        price: 90,
        bonus: [
          "2h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "Physics/Chemistry",
        price: 90,
        bonus: [
          "2h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
    ],
  },
  {
    level: "Junior College",
    subjects: [
      {
        name: "H1/H2 Math",
        price: 120,
        bonus: [
          "3h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Mathstery",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
      {
        name: "Physics/Chemistry",
        price: 120,
        bonus: [
          "3h of Face to Face/Online Consultation",
          "Fixed Teacher",
          "Personalized Coaching",
          "Personalised Learning Resources",
        ],
        imageUrl: "/images/TuitionRates/math.jpg",
      },
    ],
  },
];

export { Rates, TuitionRates };
