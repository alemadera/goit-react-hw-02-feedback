import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';
import Notification from './Notification';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: {
        good: 0,
        neutral: 0,
        bad: 0
      }
    };
  }

  handleFeedback = (type) => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1
      }
    }));
  };

  render() {
    const { feedback } = this.state;
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
          <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleFeedback} />
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
  }
}

export default App;
