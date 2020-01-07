import React, { useCallback, useState } from "react";
import "./FAQ.sass";
import { Accordion, Card } from "react-bootstrap";

const Question = ({ setActiveKey, eventKey, title, text, activeKey }) => {

  const hadleQuestionCollapse = useCallback(() => {
    setActiveKey(eventKey);
  }, [setActiveKey, eventKey]);

  const isActive = activeKey === eventKey;
  const indicatorClass = `question-indicator ${isActive ? "active" : "disabled"}`;
  const buttonClass = `question-collapse-button ${isActive ? "active" : "disabled"}`;

  return (
    <Card className="question">
      <Card.Header className="question-card">
        <div className={indicatorClass} />
        <h5>{title}</h5>
        <button className={buttonClass} onClick={hadleQuestionCollapse}>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6104 27.0237C21.7901 27.0237 27.6104 21.2034 27.6104 14.0237C27.6104 6.84398 21.7901 1.02368 14.6104 1.02368C7.43065 1.02368 1.61035 6.84398 1.61035 14.0237C1.61035 21.2034 7.43065 27.0237 14.6104 27.0237ZM14.6104 28.0237C22.3423 28.0237 28.6104 21.7557 28.6104 14.0237C28.6104 6.2917 22.3423 0.0236816 14.6104 0.0236816C6.87837 0.0236816 0.610352 6.2917 0.610352 14.0237C0.610352 21.7557 6.87837 28.0237 14.6104 28.0237Z" fill="#999999"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1459 16.1953L14.9639 19.3772C14.7687 19.5725 14.4521 19.5725 14.2568 19.3772L11.0748 16.1953C10.8796 16 10.8796 15.6834 11.0748 15.4881C11.2701 15.2929 11.5867 15.2929 11.782 15.4881L14.1104 17.8166L14.1104 9.02368L15.1104 9.02368L15.1104 17.8166L17.4388 15.4881C17.6341 15.2929 17.9506 15.2929 18.1459 15.4881C18.3412 15.6834 18.3412 16 18.1459 16.1953Z" fill="#999999"/>
          </svg>
        </button>
      </Card.Header>
      <Accordion.Collapse className="question-text" eventKey={eventKey}>
        <p>{text}</p>
      </Accordion.Collapse>
    </Card>
  );
};

const FAQ = ({ questions }) => {
  const [activeKey, setActiveKey] = useState("0");

  return (
    <Accordion className="questions-wrapper" activeKey={activeKey}>
      {
        questions.map((item, index) => {
          const { title, description } = item;
          return (
            <Question activeKey={activeKey} setActiveKey={setActiveKey} title={title} text={description} eventKey={index} />);
        })
      }
    </Accordion>
  );
};

export default FAQ;
