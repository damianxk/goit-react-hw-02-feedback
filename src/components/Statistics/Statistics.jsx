import PropTypes from 'prop-types';
import css from './statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2>Statistics</h2>
      <ul>
        <li>
          <p className={css.good}>
            good: <span className={css.number}>{good}</span>
          </p>
        </li>
        <li>
          <p className={css.neutral}>
            neutral: <span className={css.number}>{neutral}</span>
          </p>
        </li>
        <li>
          <p className={css.bad}>
            bad: <span className={css.number}>{bad}</span>
          </p>
        </li>
        <li>
          <p>
            total: <span className={css.total}>{total}</span>
          </p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
