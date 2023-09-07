import React from 'react';

const FeedbackOptions = ({ options }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={option.btn}>
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
