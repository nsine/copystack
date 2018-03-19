import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaClose } from 'react-icons/lib/fa';

import Button from './Button';
import CopyButton from './CopyButton';

const Wrapper = styled.div`
  position: relative;

  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  background-color: #ECEFF1;
`;

const HeadSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const ButtonsSection = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  width: 65px;
`;

const PageName = styled.a`
  flex: 1 0;

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
})``;

const PrettyCode = styled.pre`
  overflow: auto;
  font-size: 12px;

  && {
    border: none;
  }
`;

const makeLargerButton = (component) =>
  styled(component)`
    font-size: 20px;
  `;

const LargeCopyButton = makeLargerButton(CopyButton);
const LargeCloseButton = makeLargerButton(CloseButton);

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
        <HeadSection>
          <PageName href={url} target='_blank'>
            {pageName}
          </PageName>
          <ButtonsSection>
            <LargeCopyButton text={text} />
            <LargeCloseButton onClick={onRemove}><FaClose style={{paddingBottom: '2px'}} /></LargeCloseButton>
          </ButtonsSection>
        </HeadSection>
        <CodeWrapper>
          <PrettyCode className='prettyprint'>{text}</PrettyCode>
        </CodeWrapper>
        <TopRightPositioned>
        </TopRightPositioned>
      </Wrapper>
    );
  }
}

export default Snippet;
