import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Problems from './pages/Problems';
import styled from 'styled-components';

const App = (props) => {

  return (
    <>
    <NavBar />
    <Main>
      <Carousel />
      <Problems />
    </Main>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
`;


export default App;
