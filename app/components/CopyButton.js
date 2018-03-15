import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/lib/fa';

import Button from './Button';

export default class CopyButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onCopy: PropTypes.func,

    className: PropTypes.string,
  };

  render() {
    const { text, onCopy, className } = this.props;

    return (
      <CopyToClipboard
        text={text}
        onCopy={onCopy}
      >
        <Button color='#64B5F6' className={className}><FaCopy /></Button>
      </CopyToClipboard>
    );
  }
}
