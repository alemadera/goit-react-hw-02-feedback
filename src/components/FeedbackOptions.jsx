import React from 'react';
import { Button } from './App.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.entries(options).map(([type, name]) => (
        <Button key={type} onClick={() => onLeaveFeedback(type)}>
          {name}
        </Button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
