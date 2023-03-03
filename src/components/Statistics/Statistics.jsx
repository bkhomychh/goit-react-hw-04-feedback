import PropTypes from 'prop-types';

import { StyledList } from './Statistics.styled';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <>
      <StyledList>
        <li key="good">Good: {good}</li>
        <li key="neutral">Neutral: {neutral}</li>
        <li key="bad">Bad: {bad}</li>
        <li key="total">Total: {total}</li>
        <li key="positivePercentage">
          Positive feedback: {positivePercentage}%
        </li>
      </StyledList>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
