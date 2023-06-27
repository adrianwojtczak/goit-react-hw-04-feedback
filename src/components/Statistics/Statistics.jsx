import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={styles.statistics}>
    <p className={styles.statisticItem}>Good: {good}</p>
    <p className={styles.statisticItem}>Neutral: {neutral}</p>
    <p className={styles.statisticItem}>Bad: {bad}</p>
    <p className={styles.statisticItem}>Total: {total}</p>
    <p className={styles.statisticItem}>
      Positive Feedback: {positivePercentage}%
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
