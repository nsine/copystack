import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default class CopyButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onCopy: PropTypes.func,
  };

  render() {
    const { text, onCopy } = this.props;

    return (
      <CopyToClipboard
        text={text}
        onCopy={onCopy}
      >
        <button>Copy</button>
      </CopyToClipboard>
    );
  }
}
