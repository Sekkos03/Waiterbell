import React, { useState } from "react";
import "./FAQ.css";
import "./SeFordeler.css";
import Footer from "../Footer";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Can I set the colours/brightness/time intervals etc. of the WaiterBell?",
      answer:
        "Yes, colours, brightness, time intervals, theft protection, and notifications can be configured individually via the WaiterBell app.",
    },
    {
      question: "How much is a WaiterBell?",
      answer: "Please contact us for pricing details.",
    },
    {
      question: "Can I use the WaiterBell outside also?",
      answer: "Yes, WaiterBell is designed to work both indoors and outdoors.",
    },
    {
      question:
        "How do the WaiterBells recognize which table they are assigned?",
      answer:
        "Each WaiterBell is configured with a specific table number during setup.",
    },
    {
      question: "How long does the WaiterBell's battery last?",
      answer:
        "The WaiterBell battery lasts approximately 24 hours with continuous use.",
    },
    {
      question: "How long does it take to charge the WaiterBell?",
      answer: "Charging the WaiterBell takes about 2 hours for a full charge.",
    },
    {
      question: "Is a tablet for the Table Overview included in the supply?",
      answer:
        "Yes, a tablet is included with the system for managing table overviews.",
    },
    {
      question: "Where is the WaiterBell made?",
      answer: "The WaiterBell is manufactured in Germany.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className="container">
        <div className="faq">
          <h2 className="title">QUESTIONS?</h2>
          <p className="header-text">
            The most common questions and answers about the WaiterBell system
            can be found here. If you don’t find them, feel free to ask us via{" "}
            <a href="mailto:email@example.com">e-mail</a>,{" "}
            <a href="tel:+1234567890">phone</a>, or <a href="#">WhatsApp</a>!
          </p>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="faq-question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>Q: {faq.question}</span>
                  <span className="faq-toggle">
                    {activeIndex === index ? "▼" : "▶"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">A: {faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
