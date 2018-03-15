import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Snippet from '../components/Snippet';

export default class SnippetList extends Component {
  static propTypes = {
    snippets: PropTypes.array,

    onRemove: PropTypes.func.isRequired,
  };

  render() {
    const { snippets, onRemove } = this.props;

    return (
      <div>
        {
          snippets && snippets.length ? snippets.map(snippet => (
            <Snippet
              key={snippet.id}
              {...snippet}
              onRemove={() => onRemove(snippet.id)}
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
