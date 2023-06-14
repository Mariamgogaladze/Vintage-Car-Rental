import "./faq.css";
import FAQData from "./FAQData";
import openarrow from "./../../images/arrow1.png";
import { useState } from "react";
import closearrow from "./../../images/arrow2.png";

interface ShowAnswersState {
  [key: number]: boolean;
}

function FAQ() {
  const [showAnswers, setShowAnswers] = useState<ShowAnswersState>({});

  function handleQuestCLick(key: number) {
    setShowAnswers((prevShowAnswers) => ({
      [key]: !prevShowAnswers[key],
    }));
  }

  return (
    <div className="faq-section padding-in">
      <div className="test-title">
        <h1 className="heading">FAQ</h1>
        <p className="text">Frequently Asked Questions</p>
        <span className="span">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </span>
      </div>
      <div className="faq-container">
        {FAQData.map((faq) => (
          <div className="question-answer" key={faq.key}>
            <div
              onClick={() => handleQuestCLick(faq.key)}
              className="question-container"
            >
              <h1 className="question">{faq.question}</h1>
              <img
                className={`open-arrow ${
                  showAnswers[faq.key] ? "notvisible" : "visible"
                }`}
                src={openarrow}
                alt="arrow"
              />
              <img
                className={`close-arrow ${
                  showAnswers[faq.key] ? "visible" : "notvisible"
                }`}
                src={closearrow}
                alt="arrow1"
              />
            </div>
            <p
              className={`answer ${
                showAnswers[faq.key] ? "visible" : "notvisible"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
