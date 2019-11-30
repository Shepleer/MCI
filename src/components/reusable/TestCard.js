import React from 'react';
import { Card } from 'react-bootstrap';
import AccentButton from './AccentButton';

const TestCard = () => {
  return (<Card style={{width: '800px'}}>
    <Card.Title>Что нужно для начала процесса <br/> <i>иммиграции в Канаду?</i></Card.Title>
    <Card.Text>Пройдите тест на бесплатную оценку шансов</Card.Text>
    <AccentButton/>
  </Card>);
};

export default TestCard;
