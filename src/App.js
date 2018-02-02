import React, { Component } from 'react';
import './App.css';

import Portfolio from './components/Portfolio';
import MiniProjects from './components/MiniProjects';

import {
        BrowserRouter as Router,
        Redirect,
        Route,
        Switch
        } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div id="wrapper">
         <Switch>
            <Route path="/mini-projects" component={() => ( <MiniProjects /> )} />
            <Route exact path="/" component={() => ( <Portfolio /> )} />
            <Redirect from="*" to="/" />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;