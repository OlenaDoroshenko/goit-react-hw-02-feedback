import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.buttonsWrapper}>
    {Object.keys(options).map((option, index) => (
      <button
        key={index}
        className={css.feedbackButton}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
