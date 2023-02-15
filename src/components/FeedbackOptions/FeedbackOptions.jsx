import { Component } from 'react';
import PropTypes from 'prop-types';

import { Button } from './FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  static propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string),
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <>
        {options.map(option => (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        ))}
      </>
    );
  }
}
