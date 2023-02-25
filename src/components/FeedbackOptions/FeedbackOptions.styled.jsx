import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;

  font-size: 20px;
  font-weight: 700;

  color: white;
  background-color: #586bf8;
  text-transform: uppercase;
  border-radius: 10px;

  transition: all 250ms ease-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 7px 1px blue;
  }
  &:active {
    background-color: blue;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
