import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CopyButton from './CopyButton';

const Wrapper = styled.div`
  position: relative;

  margin: 10px;
  padding: 10px;
  border: solid 1px black;
  border-radius: 5px;
`;

const PageName = styled.a`
  font-weight: bold;
  font-size: 1.2em;
`;

const TopRightPositioned = styled.a`
  position: absolute;
  top: 0;
  right: 0;
`;

const CodeWrapper = styled.div`
  position: relative;

  background-color: #eff0f1;
  border: none;
`;

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
      <Wrapper>
        <PageName href={url} target='_blank'>
          {pageName}
        </PageName>
        <CodeWrapper>
          <pre className='prettyprint' style={{border: 'none', overflow: 'auto'}}>{text}</pre>
          <TopRightPositioned>
            <CopyButton text={text} />
          </TopRightPositioned>
        </CodeWrapper>
        <TopRightPositioned>
          <button onClick={onRemove}>Remove</button>
        </TopRightPositioned>
      </Wrapper>
    );
  }
}

export default Snippet;
