import { Component } from 'react';
import PropTypes from 'prop-types';

import { Notice } from './Notification.styled';

export class Notification extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
  };
  render() {
    const { message } = this.props;

    return <Notice>{message}</Notice>;
  }
}
