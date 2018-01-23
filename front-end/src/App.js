import React, { Component } from 'react';
// Importing English site.
import Portfolio from './components/english/Portfolio';
// Importing Spanish site.
import Portafolio from './components/spanish/Portafolio';
import {
        BrowserRouter as Router,
        Route,
        Switch
      } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
  	    <div id="wrapper">
          <Switch>
            <Route exact path='/' component={() => ( <Portfolio /> )}/>
            <Route exact path='/es' component={() => ( <Portafolio /> )}/>
          </Switch>
  	    </div>
      </Router>
    );
  }
}

export default App;