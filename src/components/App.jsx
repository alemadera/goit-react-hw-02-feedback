import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

  const feedbackOptions = {
    good: 'Buena',
    neutral: 'Neutral',
    bad: 'Mala'
  };

  return (
    <div className="App">
      <Section title="Por favor, deje su feedback">
        <FeedbackOptions options={feedbackOptions} onLeaveFeedback={handleFeedback} />
      </Section>
      
      <Section title="Estadísticas">
        {total > 0 ? (
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
        ) : (
          <Notification message="No hay feedback aún" />
        )}
      </Section>
    </div>
  );
};

export default App;
