import React, { Component } from 'react';
import Portfolio from './components/english/Portfolio';
import Portafolio from './components/spanish/Portafolio';
import {
        BrowserRouter as Router,
        Route
      } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
  	    <div id="wrapper">
          <Route exact path='/' component={() => ( <Portfolio /> )}/>
          <Route exact path='/es' component={() => ( <Portafolio /> )}/>
  	    </div>
      </Router>
    );
  }
}

export default App;