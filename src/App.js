import React, { Component } from 'react';

import Portfolio from './components/Portfolio';
import MiniProjects from './components/MiniProjects';

import {
        BrowserRouter as Router,
        Redirect,
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
            <Route exact path='/' component={() => ( <Portfolio /> )} />
            <Route exact path='/mini-projects' component={() => ( <MiniProjects /> )} />
            <Redirect from='/*' exact to='/' />
          </Switch>
  	    </div>
      </Router>
    );
  }
}

export default App;