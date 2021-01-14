import React from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #E9F3FA;
  padding: 0 20px;
  transitions: .2s;
  outline: none;
  &:focus {
    box-shadow: inset 1px 4px 4px 1px #999;
  }
`;

const Input = (props) => {
  return (
    <InputText 
      type={props.type} 
      name={props.name} 
      value={props.value} 
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
}

export default Input;
