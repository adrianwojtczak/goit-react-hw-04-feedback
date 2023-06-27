import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedbackOptions}>
    {options.map(option => (
      <button
        key={option}
        type="button"
        className={`${styles.button} ${styles[`button--${option}`]}`}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
