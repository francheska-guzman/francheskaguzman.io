import React, { Component } from 'react';
import './App.css';

import Portfolio from './components/Portfolio';
import MiniProjects from './components/MiniProjects';
import PageNotFound from './components/PageNotFound';

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
            <Route path="/" component={() => ( <Portfolio /> )} />
            <Route path="/404" component={() => ( <PageNotFound /> )} />
            <Redirect from="*" to="/404" />
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;