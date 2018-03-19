import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

const SearchInput = Input.extend`
  width: 100%;
`;

class SearchField extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  handleInputChange = (e) => {
    const value = e.target.value;
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        <SearchInput
          type="text"
          onChange={this.handleInputChange}
          placeholder='Search...'
        />
      </div>
    );
  }
}

export default SearchField;
