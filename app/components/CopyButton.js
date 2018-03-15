import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/lib/fa';
import styled from 'styled-components';

import Button from './Button';

const CopyButtonInner = styled(Button).attrs({
  color: '#64B5F6',
})`
  min-height: unset;
  padding: 5px 7px;
  border-radius: 0;
`;

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
        <CopyButtonInner><FaCopy /></CopyButtonInner>
      </CopyToClipboard>
    );
  }
}
