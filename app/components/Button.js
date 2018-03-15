import styled from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${props => props.color};
  padding: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${props => darken(0.1, props.color)};
  }
`;
