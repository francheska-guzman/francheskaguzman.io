import React, { Component } from 'react';
import Portfolio from './components/english/Portfolio';
import Portafolio from './components/spanish/Portafolio';
import {
        BrowserRouter as Router,
        Route,
        Redirect,
        Switch
      } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
	    <div id="wrapper">
	       <Switch>
            <Route path='/' exact component={() => ( <Portfolio /> )}/>
            <Route path='/es' exact component={() => ( <Portafolio /> )}/>
	          <Redirect from='/*' to='/' />
	       </Switch>
	    </div>
      </Router>
    );
  }
}

export default App;