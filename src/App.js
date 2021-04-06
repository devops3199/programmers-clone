import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SecondNavBar from './components/SecondNavBar';
import Carousel from './components/Carousel';
import Challenge from './pages/Challenge';
import styled from 'styled-components';

const App = (props) => {

  return (
    <>
    <NavBar />
    <Main>
      <SecondNavBar />
      <Carousel />
      <Challenge />
    </Main>
    </>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
