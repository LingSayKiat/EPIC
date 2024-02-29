import React, { useState } from "react";
import "./FAQ.css";

function FAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div className="faq-question" onClick={toggle}>
        {question}
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

// New wrapper component for the FAQ page
function FAQPage() {
  return (
    <div className="faq-page">
      <h2>FAQs</h2>
      {faqData.map((faq, index) => (
        <FAQ key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}

const faqData = [
  {
    question: "What are classes like in The Epic Mind?",
    answer:
      "Here in The Epic Mind, we apply a customised curriculum method of teaching. We believe that every learner varies in pace and needs, and thus our educators will guide and assign work to each student individually. As such we keep our classes as small as possible, with one tutor to five students at a given time. ",
  },
  {
    question: "Do you do one to one coaching?",
    answer:
      "We believe that a classroom environment facilitates better teaching and learning opportunities. While our teachers guide and assign work to students individually, we will sometimes encourage students to work together or guide each other in the process as well. This engages and creates a co-operative environment between students. ",
  },
  {
    question: "Are there any hidden charges or additional discounts?",
    answer:
      "There are no hidden charges. We want to create an environment that is honest and fuss free for our clients so that we can facilitate learning, and not negotiate prices. For that same reason, we believe in delivering good results for a fair price and will not provide any discounts that will undermine the quality education for your child.",
  },
  {
    question:
      "Would it be too tiring for my child to sign up for back to back classes?",
    answer:
      "While your child will be actively engaged by our tutors throughout the course of the class, we do provide time for them to take ample breaks and rest. We also hope to instill the value of independent learning and grit, and while back to back classes might be tiring to students at first, it will eventually develop your child's endurance,  which is an important skill leading up to major tests and examinations.",
  },
];

export { FAQ, FAQPage, faqData };
