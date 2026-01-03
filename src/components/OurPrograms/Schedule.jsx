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
      // setCurrentSchedule(onlineSchedule);
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
          Payment Schedule
        </motion.button>
      </div>
      <div className="timetable-header">
        <h2>{outlet} Branch Schedule 2026</h2>
      </div>
      {outlet === "Online" ? (
        <div className="online-pdf-link">
          <a
            href={`${process.env.PUBLIC_URL}/images/Schedule/payment-schedule.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="pdf-button"
          >
            📄 View Payment Schedule (PDF)
          </a>
        </div>
      ) : (
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
                {index === 0 ||
                currentSchedule[index - 1].level !== row.level ? (
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
      )}
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
    tuesday: ["NEW CLASS!", "3pm - 4.30pm"],
    wednesday: ["3pm/3.30pm", "4.30pm/5pm", "6.30pm - 8pm"],
    thursday: [],
    friday: ["3pm - 4.30pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    saturday: ["NEW CLASS!", "3pm - 4.30pm"],
    sunday: ["9.30am - 11am", "11am - 12.30pm", "12.30pm - 2pm"],
  },
  {
    level: "Primary",
    subject: "Science",
    monday: ["3pm - 4.30pm", "4.30pm - 6pm", "6.30pm - 8pm"],
    tuesday: ["NEW CLASS!", "3pm - 4.30pm"],
    wednesday: ["3pm/3.30pm", "4.30pm/5pm", "6.30pm - 8pm"],
    thursday: [],
    friday: ["3pm - 4.30pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    saturday: ["NEW CLASS!", "3pm - 4.30pm"],
    sunday: ["9.30am - 11am", "11am - 12.30pm", "12.30pm - 2pm"],
  },
  {
    level: "Primary",
    subject: "English",
    monday: ["3pm - 4.30pm", "4.30pm - 6pm", "6.30pm - 8pm"],
    tuesday: ["NEW CLASS!", "3pm - 4.30pm"],
    wednesday: ["3pm - 4.30pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    thursday: [],
    friday: ["3pm - 4.30pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    saturday: [],
    sunday: [],
  },
  {
    level: "Secondary",
    subject: "S1/2 Math",
    monday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    tuesday: ["3:30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    wednesday: [],
    thursday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    friday: ["3.30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: [],
    sunday: ["10am - 12pm", "11.30am - 1.30pm", "1pm - 3pm", "2.30pm - 4.30pm"],
  },
  {
    level: "Secondary",
    subject: "A/E Math",
    monday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    tuesday: ["3:30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    wednesday: [],
    thursday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    friday: ["3.30pm - 5.30pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: [],
    sunday: ["10am - 12pm", "11.30am - 1.30pm", "1pm - 3pm", "2.30pm - 4.30pm"],
  },
  {
    level: "Secondary",
    subject: "S1/2 Science",
    monday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    tuesday: ["NEW CLASS!", "2.30pm - 4.30pm"],
    wednesday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    thursday: [],
    friday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    saturday: [],
    sunday: ["11am - 1pm", "1pm - 3pm", "2.30pm - 4.30pm"],
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
    sunday: ["11am - 1pm", "1pm - 3pm", "2.30pm - 4.30pm"],
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
    monday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    tuesday: ["NEW CLASS!", "2.30pm - 4.30pm"],
    wednesday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    thursday: [],
    friday: ["NEW CLASS!", "3pm - 5pm", "5pm - 7pm"],
    saturday: [],
    sunday: [],
  },
  {
    level: "Poly / Junior College",
    subject: "H1/H2 Math",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["10am - 1pm"],
  },
  {
    level: "Poly / Junior College",
    subject: "Physics/Chemistry",
    monday: ["NEW CLASS!", "Ask for time slots"],
    tuesday: [],
    wednesday: [],
    thursday: ["NEW CLASS!", "Ask for time slots"],
    friday: [],
    saturday: [],
    sunday: ["NEW CLASS!", "Ask for time slots"],
  },
];

// Hougang Branch Schedule
const hougangSchedule = [
  {
    level: "Pre-School",
    subject: "Phonics",
    monday: ["2.30pm - 4pm", "7pm - 9pm"],
    tuesday: ["5.30pm - 7pm", "7.30pm - 9pm"],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["NEW CLASS!", "1pm - 2.30pm"],
  },
  {
    level: "Primary",
    subject: "Math",
    monday: [],
    tuesday: ["Pending Class", "3.30pm - 5pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    wednesday: [],
    thursday: [],
    friday: ["P3-4 Pending", "3.30pm - 5pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    saturday: ["9.30am - 11am", "11am - 12.30pm", "12.30pm - 2pm"],
    sunday: [],
  },
  {
    level: "Primary",
    subject: "Science",
    monday: [],
    tuesday: ["Pending Class", "3.30pm - 5pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    wednesday: ["NEW CLASS!", "4pm - 5.30pm"],
    thursday: ["NEW CLASS!", "4pm - 5.30pm", "5.30pm - 7pm"],
    friday: ["Pending Class", "3.30pm - 5pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    saturday: ["9.30am - 11am", "11am - 12.30pm", "12.30pm - 2pm"],
    sunday: ["Pending Class", "Request Time Slots"],
  },
  {
    level: "Primary",
    subject: "English",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: ["Pending Class", "3pm - 4.30pm", "5pm - 6.30pm", "6.30pm - 8pm"],
    saturday: [
      "NEW CLASS!",
      "9.30am - 11am",
      "11am - 12.30pm",
      "12.30pm - 2pm",
    ],
    sunday: ["Pending Class", "Request Time Slots"],
  },
  {
    level: "Secondary",
    subject: "S1/2 Math",
    monday: [],
    tuesday: [],
    wednesday: ["3.30pm - 5.30pm", "5.30pm - 7.30pm", "6.30pm - 8.30pm"],
    thursday: ["NEW CLASS!", "5pm - 7pm", "6.30pm - 8.30pm"],
    friday: ["3.30pm - 5pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: [
      "9.30am - 11.30am",
      "11am - 12.30pm",
      "1.30pm - 3.30pm",
      "3.30pm - 5.30pm",
      "5pm - 7pm",
    ],
    sunday: ["Pending Class", "Request Time Slots"],
  },
  {
    level: "Secondary",
    subject: "A/E Math",
    monday: [],
    tuesday: [],
    wednesday: ["3.30pm - 5.30pm", "5.30pm - 7.30pm", "6.30pm - 8.30pm"],
    thursday: ["NEW CLASS!", "5pm - 7pm", "6.30pm - 8.30pm"],
    friday: ["3.30pm - 5pm", "5pm - 7pm", "6.30pm - 8.30pm"],
    saturday: [
      "9.30am - 11.30am",
      "11am - 12.30pm",
      "1.30pm - 3.30pm",
      "3.30pm - 5.30pm",
      "5pm - 7pm",
    ],
    sunday: ["Pending Class", "Request Time Slots"],
  },
  {
    level: "Secondary",
    subject: "S1/2 Science",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: ["10am - 12pm", "11.30am - 1.30pm"],
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
    tuesday: ["NEW CLASS!", "5.30pm - 7pm"],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Poly / Junior College",
    subject: "H1/H2 Math",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  {
    level: "Poly / Junior College",
    subject: "Physics/Chemistry",
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: ["NEW CLASS!", "Ask for time slots"],
    friday: [],
    saturday: [],
    sunday: [],
  },
];

// Online Lesson Schedule
/* const onlineSchedule = [
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
]; */

export { TimeTable, Schedule };
