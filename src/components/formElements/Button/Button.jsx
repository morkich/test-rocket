import React from 'react';
import styled from 'styled-components';

const ButtonForm = styled.button`
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #237fc285;
  font-weight: 700;
  padding: 0 30px;
  transitions: .2s;
  outline: none;
  cursor: pointer;
  transition: .2s;
  &:hover {
    background-color: #237FC2;
    color: #fff;
  }
`;

const Button = (props) => {
  return (
    <ButtonForm>{props.text}</ButtonForm>
  );
}

export default Button;
