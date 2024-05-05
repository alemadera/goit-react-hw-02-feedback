import React, { Component } from 'react';
import { Button } from './App.styled';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {Object.entries(options).map(([type, name]) => (
          <Button key={type} onClick={() => onLeaveFeedback(type)}>
            {name}
          </Button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
