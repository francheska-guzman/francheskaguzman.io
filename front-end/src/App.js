import React, { Component } from 'react';
import Portfolio from './components/Portfolio';
import Portafolio from './componentes/Portafolio';
import {
        BrowserRouter as Router,
        Route,
        Redirect,
        Switch
      } from 'react-router-dom';
import './App.css';

// console.log('App.js is working.');

class App extends Component {
  render() {
    return (
      <Router>
	      <div id="wrapper">
	        <Switch>
            <Route path='francheskaguzman.io/es' component={() => (<Portafolio />) }/>
            <Route path='francheskaguzman.io/' component={() => (<Portfolio />) }/>
	          <Redirect from='francheskaguzman.io/*' to='francheskaguzman.io/' />
	        </Switch>
	      </div>
      </Router>
    );
  }
}

export default App;