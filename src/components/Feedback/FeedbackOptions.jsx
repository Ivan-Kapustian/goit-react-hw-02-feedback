import React, { Component } from 'react';

const FeedbackOptions = ({ goodFeedback, neutralFeedback, badFeedback }) => {
  return (
    <div>
      <button onClick={goodFeedback}>Good</button>
      <button onClick={neutralFeedback}>Neutral</button>
      <button onClick={badFeedback}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
