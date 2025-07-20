import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Schedule.css";

function TimeTable() {
  const [currentSchedule, setCurrentSchedule] = useState(toaPayohSchedule);
  const [outlet, setOutlet] = useState("Toa Payoh");

  // Updated function to set the schedule based on the button clicked
  function toggleSchedule(selectedOutlet) {
    if (selectedOutlet === "Toa Payoh") {
      setCurrentSchedule(toaPayohSchedule);
      setOutlet("Toa Payoh");
    } else if (selectedOutlet === "Hougang") {
      setCurrentSchedule(hougangSchedule);
      setOutlet("Hougang");
    } else if (selectedOutlet === "Online") {
      setCurrentSchedule(onlineSchedule);
      setOutlet("Online");
    }
  }

  // Function to render the schedule times, separating them with line breaks
  function renderScheduleTimes(timesArray) {
    if (!Array.isArray(timesArray)) {
      return null;
    }

    return timesArray.map((time, index) => (
      <React.Fragment key={index}>
        {time}
        {index !== timesArray.length - 1 ? <br /> : null}
      </React.Fragment>
    ));
  }

  // Function to count how many rows "Primary" should span
  function calculateRowSpan(schedule, level) {
    return schedule.filter((row) => row.level === level).length;
  }

  // Function to determine if date has lessons, used to add grey spacing in css
  function checkLesson(timesArray) {
    if (timesArray.length === 0) {
      return "no-lesson";
    } else if (timesArray.some((time) => time.includes("NEW CLASS!"))) {
      return "new-class";
    } else {
      return "normal-lesson";
    }
  }

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
      className="timetable-container"
    >
      <div className="timetable-header">
        <h1 className="schedule-header">Schedule</h1>
      </div>
      <div className="button-container">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleSchedule("Toa Payoh")}
          className={`schedule-button ${
            outlet === "Toa Payoh" ? "active" : ""
          }`}
        >
          Toa Payoh
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleSchedule("Hougang")}
          className={`schedule-button ${outlet === "Hougang" ? "active" : ""}`}
        >
          Hougang
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleSchedule("Online")}
          className={`schedule-button ${outlet === "Online" ? "active" : ""}`}
        >
          Online
        </motion.button>
      </div>
      <div className="timetable-header">
        <h2>{outlet} Branch Schedule 2024</h2>
      </div>
      <table className="timetable">
        <thead>
          <tr>
            <th>Level</th>
            <th>Subject</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wedenesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {currentSchedule.map((row, index) => (
            <tr key={index}>
              {/* Check if the level is the first occurrence */}
              {index === 0 || currentSchedule[index - 1].level !== row.level ? (
                <td
                  rowSpan={calculateRowSpan(currentSchedule, row.level)}
                  className="schedule-level"
                >
                  {row.level}
                </td>
              ) : null}
              <td className="schedule-subject">{row.subject}</td>
              <td className={checkLesson(row.monday)}>
                {renderScheduleTimes(row.monday)}
              </td>
              <td className={checkLesson(row.tuesday)}>
                {renderScheduleTimes(row.tuesday)}
              </td>
              <td className={checkLesson(row.wednesday)}>
                {renderScheduleTimes(row.wednesday)}
              </td>
              <td className={checkLesson(row.thursday)}>
                {renderScheduleTimes(row.thursday)}
              </td>
              <td className={checkLesson(row.friday)}>
                {renderScheduleTimes(row.friday)}
              </td>
              <td className={checkLesson(row.saturday)}>
                {renderScheduleTimes(row.saturday)}
              </td>
              <td className={checkLesson(row.sunday)}>
                {renderScheduleTimes(row.sunday)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

function Schedule() {
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
      className="schedule-container"
    >
      <TimeTable />
    </motion.div>
  );
}

// Toa Payoh Branch Schedule
const toaPayohSchedule = [
  {
    level: "Primary",
    subject: "Math",
    monday: [],
    tuesday: [],
    wednesday: ["3.30pm - 5pm", "5pm - 6.30pm"],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["9.30am - 11am", "11am - 12.30pm", "12.30pm - 2pm"],
  },
  {
    level: "Primary",
    subject: "Science",
    monday: ["6pm - 7.30pm"],
    tuesday: [],
    wednesday: ["3.30pm - 5pm", "5pm - 6.30pm"],
    thursday: [],
    friday: [],
    saturday: ["NEW CLASS!", "10.30am - 12pm"],
    sunday: ["9.30am - 11am", "11am - 12.30pm", "12.30pm - 2pm"],
  },
  {
    level: "Primary",
    subject: "English",
    monday: [],
    tuesday: [],
    wednesday: ["6.30pm - 8pm"],
    thursday: ["3.30pm - 5pm"],
    friday: [],
    saturday: ["NEW CLASS!", "12pm - 1:30pm"],
    sunday: [],
  },
  {
    level: "Secondary",
    subject: "S1/2 Math",
    monday: ["NEW CLASS!", "5pm - 7pm"],
    tuesday: ["3:30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    wednesday: [],
    thursday: ["NEW CLASS!", "2:30pm - 4:30pm"],
    friday: ["3.30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: [],
    sunday: ["10am - 12pm", "11.30am - 1.30pm", "1pm - 3pm", "2.30pm - 4.30pm"],
  },
  {
    level: "Secondary",
    subject: "S1/2 Math",
    monday: ["NEW CLASS!", "5pm - 7pm"],
    tuesday: ["3:30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    wednesday: [],
    thursday: ["NEW CLASS!", "2:30pm - 4:30pm"],
    friday: ["3.30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: [],
    sunday: ["10am - 12pm", "11.30am - 1.30pm", "1pm - 3pm", "2.30pm - 4.30pm"],
  },
  {
    level: "Secondary",
    subject: "S1/2 Science",
    monday: ["NEW CLASS!", "4pm - 6pm"],
    tuesday: [],
    wednesday: [],
    thursday: ["3.30pm - 5pm"],
    friday: [],
    saturday: [],
    sunday: ["12.30pm - 2pm", "2pm - 3.30pm"],
  },
  {
    level: "Secondary",
    subject: "Physics/Chemistry",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["12.30pm - 2pm", "2pm - 3.30pm"],
  },
  {
    level: "Secondary",
    subject: "Biology",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Secondary",
    subject: "English",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: ["NEW CLASS!", "10.30am - 12pm", "12pm - 1.30pm"],
    sunday: [],
  },
  {
    level: "Junior College",
    subject: "H1/H2 Math",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: ["5pm - 8pm"],
    saturday: [],
    sunday: ["10am - 1pm"],
  },
  {
    level: "Junior College",
    subject: "Physics/Chemistry",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["2.30pm - 4.30pm"],
  },
];

// Hougang Branch Schedule
const hougangSchedule = [
  {
    level: "Primary",
    subject: "Math",
    monday: ["NEW CLASS!", "5.30pm - 7pm", "7pm - 8.30pm"],
    tuesday: ["3.30pm - 5pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    wednesday: [],
    thursday: ["NEW CLASS!", "4pm - 5.30pm", "5.30pm - 7pm"],
    friday: [],
    saturday: [
      "9.30am - 11am",
      "11am - 12.30pm",
      "12.30pm - 2pm",
      "2.30pm - 4pm",
      "4pm - 5.30pm",
    ],
    sunday: [],
  },
  {
    level: "Primary",
    subject: "Science",
    monday: [],
    tuesday: ["3.30pm - 5pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    wednesday: ["NEW CLASS!", "4pm - 5.30pm"],
    thursday: ["NEW CLASS!", "4pm - 5.30pm", "5.30pm - 7pm"],
    friday: [],
    saturday: [
      "9.30am - 11am",
      "11am - 12.30pm",
      "12.30pm - 2pm",
      "2.30pm - 4pm",
      "4pm - 5.30pm",
    ],
    sunday: [],
  },
  {
    level: "Primary",
    subject: "English",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Secondary",
    subject: "S1/2 Math",
    monday: ["NEW CLASS!", "5.30pm - 7pm", "7pm - 8.30pm"],
    tuesday: [],
    wednesday: ["5.30pm - 7.30pm", "6.30pm - 8.30pm"],
    thursday: ["NEW CLASS!", "5pm - 7pm", "6.30pm - 8.30pm"],
    friday: ["3.30pm - 5pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: ["NEW CLASS!", "3.30pm - 5.30pm", "5.30pm - 7.30pm"],
    sunday: [
      "10am - 12pm",
      "11.30am - 1.30pm",
      "1pm - 3pm",
      " 2.30pm - 4.30pm",
    ],
  },
  {
    level: "Secondary",
    subject: "A/E Math",
    monday: ["NEW CLASS!", "5.30pm - 7pm", "7pm - 8.30pm"],
    tuesday: [],
    wednesday: ["5.30pm - 7.30pm", "6.30pm - 8.30pm"],
    thursday: ["NEW CLASS!", "5pm - 7pm", "6.30pm - 8.30pm"],
    friday: ["3.30pm - 5pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: ["NEW CLASS!", "3.30pm - 5.30pm", "5.30pm - 7.30pm"],
    sunday: [
      "10am - 12pm",
      "11.30am - 1.30pm",
      "1pm - 3pm",
      " 2.30pm - 4.30pm",
    ],
  },
  {
    level: "Secondary",
    subject: "S1/2 Science",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: ["NEW CLASS!", "5.30pm - 7pm"],
    friday: [],
    saturday: [],
    sunday: ["12.30pm - 2pm", "2pm - 3.30pm"],
  },
  {
    level: "Secondary",
    subject: "Physics/Chemistry",
    monday: ["5.30pm - 7pm", "7pm - 8.30pm"],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["12.30pm - 2pm", "2pm - 3.30pm"],
  },
  {
    level: "Secondary",
    subject: "Biology",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Secondary",
    subject: "English",
    monday: [],
    tuesday: ["NEW CLASS!", "5.30pm - 7pm"],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Junior College",
    subject: "H1/H2 Math",
    monday: [],
    tuesday: [],
    wednesday: ["5.30pm - 8.30pm"],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Junior College",
    subject: "Physics/Chemistry",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
];

// Online Lesson Schedule
const onlineSchedule = [
  {
    level: "Primary",
    subject: "Math",
    monday: [],
    tuesday: [],
    wednesday: ["7pm - 8.30pm"],
    thursday: [],
    friday: ["3.30pm - 5pm", "5pm - 6.30pm", "7pm - 8.30pm"],
    saturday: [],
    sunday: [],
  },
  {
    level: "Primary",
    subject: "Science",
    monday: [],
    tuesday: [],
    wednesday: ["7pm - 8.30pm"],
    thursday: [],
    friday: ["3.30pm - 5pm", "5pm - 6.30pm", "7pm - 8.30pm"],
    saturday: [],
    sunday: [],
  },
  {
    level: "Primary",
    subject: "English",
    monday: ["7pm - 8.30pm"],
    tuesday: [],
    wednesday: [],
    thursday: ["7.30pm - 9pm"],
    friday: [],
    saturday: [],
    sunday: ["11am - 12.30pm"],
  },
  {
    level: "Secondary",
    subject: "English",
    monday: ["7pm - 8.30pm"],
    tuesday: [],
    wednesday: [],
    thursday: ["7.30pm - 9pm"],
    friday: [],
    saturday: [],
    sunday: ["11.30am - 1pm"],
  },
];

export { TimeTable, Schedule };
