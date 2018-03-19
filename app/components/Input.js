import styled from 'styled-components';

export default styled.input`
  box-sizing: border-box;

  display: inline-block;
  padding: 10px 20px;

  border: none;
  border-radius: 5px;

  font: normal 16px/normal Arial, Helvetica, sans-serif;
  color: rgba(56, 56, 56, 1);
  text-overflow: clip;

  background: rgba(252, 252, 252 ,1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2) ;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.66) ;

  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
`;
