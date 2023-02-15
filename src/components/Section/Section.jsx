import PropTypes from 'prop-types';
import { Component } from 'react';

import { Block, Title } from './Section.styled';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const { title, children } = this.props;

    return (
      <Block>
        <Title>{title}</Title>
        {children}
      </Block>
    );
  }
}
