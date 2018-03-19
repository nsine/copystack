import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SnippetList from '../components/SnippetList';
import SearchField from '../components/SearchField';
import NoSnippetsDiv from '../components/NoSnippetsDiv';
import { removeSnippet } from '../actions';

const CenteredSpan = styled.span`
  text-align: center;
`;

function filterByPageName(snippets, filter) {
  return snippets.filter(s => s.pageName.toLowerCase().includes(filter.toLowerCase()));
}

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

  state = {
    filter: '',
  };

  handleRemoveSnippet = (id) => {
    this.props.removeSnippet(id);
  }

  handleFilterChange = (filter) => {
    this.setState({
      filter,
    });
  }

  render() {
    const { snippets } = this.props;
    const { filter } = this.state;

    const filteredSnippets = filter ? filterByPageName(snippets, filter) : snippets;

    return (
      snippets.length ? (
        <div>
          <SearchField onChange={this.handleFilterChange}/>
          {
            filter && !filteredSnippets.length ? (
              <NoSnippetsDiv>No snippets found</NoSnippetsDiv>
            ) : (
              <SnippetList
                snippets={filteredSnippets}
                onRemove={this.handleRemoveSnippet}
              />
            )
          }
        </div>
      ) : (
        <NoSnippetsDiv>
          <CenteredSpan>
            You haven&apos;t saved any snippets.
            Go to <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com">stackoverflow.com</a>
            and find something useful
          </CenteredSpan>
        </NoSnippetsDiv>
      )
    );
  }
}
