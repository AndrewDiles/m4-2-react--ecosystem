import React from 'react';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom';

import Header from './Header';
import Homepage from './Homepage';
import ItemDetails from './ItemDetails';
import ErrorPage from './ErrorPage';
import About from './About';

// var {vw, vh, vmin, vmax} = require('react-native-viewport-units');


function App(props) {
  return (
    <Router>
      <MasterDiv className='master'>
        <Header>
        </Header>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route path="/fruit/:fruitid">
            <ItemDetails/>
          </Route>
          <Route> 
          {/* // Catches all that do not match */}
            <ErrorPage />
          </Route>
        </Switch>
      </MasterDiv>
    </Router>
  )
}

const MasterDiv = styled.div`
  background-color: whitesmoke;
  padding: 1%;
  min-height: 700px;
`

export default App;
