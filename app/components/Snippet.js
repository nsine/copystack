import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaClose } from 'react-icons/lib/fa';

import Button from './Button';
import CopyButton from './CopyButton';

const Wrapper = styled.div`
  position: relative;

  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: #ECEFF1;
`;

const PageName = styled.a`
  font-weight: bold;
  font-size: 1.5em;
  text-decoration: none;
  color: black;

  &:visited {
    text-decoration: none;
  }
`;

const TopRightPositioned = styled.a`
  position: absolute;
  top: 0;
  right: 0;
`;

const CodeWrapper = styled.div`
  position: relative;

  background-color: #fff;
  border: none;
`;

const CloseButton = styled(Button).attrs({
  color: '#EF5350',
})`
  margin-right: -10px;
  margin-top: -10px;
`;

const PrettyCode = styled.pre`
  overflow: auto;
  font-size: 12px;

  && {
    border: none;
  }
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
          <PrettyCode className='prettyprint'>{text}</PrettyCode>
          <TopRightPositioned>
            <CopyButton text={text} />
          </TopRightPositioned>
        </CodeWrapper>
        <TopRightPositioned>
          <CloseButton onClick={onRemove}><FaClose style={{paddingBottom: '2px'}} /></CloseButton>
        </TopRightPositioned>
      </Wrapper>
    );
  }
}

export default Snippet;
