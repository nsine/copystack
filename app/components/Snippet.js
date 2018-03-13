import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Snippet extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const { pageName, url, text, onRemove } = this.props;
    return (
      <div>
        <div>{pageName}</div>
        <div>{url}</div>
        <div>{text}</div>
        <div>
          <button onClick={onRemove}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Snippet;
