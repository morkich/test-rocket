import React from 'react';
import styled from 'styled-components';
import Input from '../../formElements/Input/Input';
import Button from '../../formElements/Button/Button';

const Wrap = styled.div`
  position: relative;
  background-color: #fff;
  box-shadow: 1px 4px 4px 1px #999;
  padding: 10px 20px;
  margin-top: 30px;
  border-radius: 5px;
`;

const FilterForm = styled.form`
  display: grid;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  justify-content: flex-start;
`;

const FilterPost = (props) => {

  return (
    <Wrap>
      <FilterForm onSubmit={props.onSubmit}>
        <Input
          type="text"
          name={'search'}
          value={props.searchQuery}
          onChange={props.onChange}
          placeholder={'Search post...'}
        />
        <Button 
          text={'Find'}
        />
      </FilterForm>
    </Wrap>
  );
}

export default FilterPost;