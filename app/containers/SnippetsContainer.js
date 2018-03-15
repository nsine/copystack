import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SnippetList from '../components/SnippetList';
import { removeSnippet } from '../actions';

@connect((state) => ({
  snippets: state.snippets,
}), {
  removeSnippet,
})
export default class SnippetsContainer extends Component {
  static propTypes = {
    snippets: PropTypes.array,

    removeSnippet: PropTypes.func.isRequired,
  };

  handleRemoveSnippet = (id) => {
    this.props.removeSnippet(id);
  }

  render() {
    const { snippets } = this.props;
    console.log(snippets);
    return (
      <div>
        <SnippetList
          snippets={snippets}
          onRemove={this.handleRemoveSnippet}
        />
      </div>
    );
  }
}
