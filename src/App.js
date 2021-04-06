import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SecondNavBar from './components/SecondNavBar';
import Carousel from './components/Carousel';
import Problems from './pages/Problems';
import styled from 'styled-components';
import Footer from './components/Footer';


const App = (props) => {

  return (
    <>
    <NavBar />
    <Main>
      <SecondNavBar />
      <Carousel />
      <Problems />
    </Main>
    <Footer/>
    </>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
