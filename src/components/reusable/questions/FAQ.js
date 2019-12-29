import React, { useCallback, useState } from 'react';
import './FAQ.sass';
import { Accordion, Card } from 'react-bootstrap';
import collapseArrow from '../../../images/other/collapseArrow.png';

const Question = ({ setActiveKey, eventKey, title, text, activeKey }) => {

  const hadleQuestionCollapse = useCallback(() => {
    setActiveKey(eventKey);
  }, [setActiveKey, eventKey]);

  const isActive = activeKey === eventKey;
  const indicatorClass = `question-indicator ${isActive ? 'active' : 'disabled'}`;
  const buttonClass = `question-collapse-button ${isActive ? 'active' : 'disabled'}`;

  return (
    <Card className="question">
      <Card.Header className="question-card">
        <div className={indicatorClass} />
        <h5>{title}</h5>
        <button className={buttonClass} onClick={hadleQuestionCollapse}>
          <img src={collapseArrow} alt="collapse-arrow" />
        </button>
      </Card.Header>
      <Accordion.Collapse className="question-text" eventKey={eventKey}>
        <p>{text}</p>
      </Accordion.Collapse>
    </Card>
  );
};

const FAQ = ({ questions }) => {
  const [activeKey, setActiveKey] = useState('0');

  return (
    <Accordion className="questions-wrapper" activeKey={activeKey}>
      {
        questions.map((item, index) => {
          const { title, description } = item;
          return(<Question activeKey={activeKey} setActiveKey={setActiveKey} title={title} text={description} eventKey={index}/>)
        })
      }
    </Accordion>
  );
};

export default FAQ;
