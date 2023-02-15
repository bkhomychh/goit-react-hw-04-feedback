import styled from 'styled-components';

export const Button = styled.button`
  padding: 5px 10px;

  font-size: 20px;
  font-weight: 700;

  color: white;
  background-color: #586bf8;
  text-transform: uppercase;

  transition: all 250ms ease-out;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
