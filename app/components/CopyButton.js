import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class CopyButton extends Component {
  static propTypes = {
    text: PropTypes.string,
  };

  render() {
    const { text } = this.props;

    return (
      <CopyToClipboard text={text}>
        <button>Copy</button>
      </CopyToClipboard>
    );
  }
}
