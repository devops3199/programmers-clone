import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/configureStore';
import NavBar from './components/NavBar';
import SecondNavBar from './components/SecondNavBar';
import Carousel from './components/Carousel';
import Challenge from './pages/Challenge';
import styled from 'styled-components';
import Footer from './components/Footer';


const App = (props) => {

  return (
    <>
    <NavBar />
    <ConnectedRouter history={history}>
      <Route path='/' exact render={() => {
        return (
          <Main>
            <SecondNavBar />
            <Carousel />
            <Challenge />
          </Main>
        );
      }} />
    </ConnectedRouter>
    <Footer/>
    </>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
