import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snippet from '../components/Snippet';
import { removeSnippet } from '../actions';

@connect((state) => ({
  snippets: state.snippets,
}), {
  removeSnippet,
})
export default class SnippetList extends Component {
  static propTypes = {
    snippets: PropTypes.array,

    removeSnippet: PropTypes.func.isRequired,
  };

  makeHandleRemove = (id) => () => {
    this.props.removeSnippet(id);
  }

  render() {
    const { snippets } = this.props;

    return (
      <div>
        {
          snippets && snippets.length ? snippets.map(snippet => (
            <Snippet
              key={snippet.id}
              {...snippet}
              onRemove={this.makeHandleRemove(snippet.id)}
            />
          )) : (
            <div>
              No saved snippets
            </div>
          )
        }
      </div>
    );
  }
}
