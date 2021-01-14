import React from 'react';
import preloader from '../../../assets/img/icon/preloader.svg';
import styled from 'styled-components';

const Wrap = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
top: 0;
right: 0;
left: 0;
bottom: 0;
z-index: 10;
background: #fff;
height: 100vh;
`;

let Preloader = (props) => {
  return (
    <Wrap>
      <img src={preloader} alt=""/>
    </Wrap>
  )
}

export default Preloader;