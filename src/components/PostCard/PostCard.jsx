import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  position: relative;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 4px 4px 1px #999;
  transition: .1s;
  &:hover {
    transform: scale(1.01);
  }
`;

const Title = styled.h2`
  position: relative;
  color: #0E2A42;
  text-transform: uppercase;  
  margin: 0;
`;

const Author = styled.span`
  font-size: 12px;
  color: #AECAD5;
`;

const Content = styled.p`  
  margin: 10px 0;
`;

const PostCard = (props) => {  
  return (
    <Item>
      <Title>{props.title}</Title>
      <Author>Author: {props.user[0] ? `${props.user[0].name} (${props.user[0].username})`: `Guest`}</Author>
      <Content>{props.body}</Content>
    </Item>
  )
}


export default PostCard;