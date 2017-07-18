import React, { Component } from 'react';
import FourOFour from './components/Four_O_Four';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import {
        BrowserRouter as Router,
        Route,
        Switch
      } from 'react-router-dom';
import './App.css';

console.log('App.js is working.');

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
          <Route startsWith path='/francheskaguzman.io/' component={() => (<Navigation />) }/>
	        <Switch>
            <Route path='/francheskaguzman.io' exact component={() => (<Portfolio />) }/>
	          <Route path='/francheskaguzman.io/*' component={() => (<FourOFour />) }/>
	        </Switch>
	        <Route startsWith path='/francheskaguzman.io/' component={() => (<Footer />) }/>
	      </div>
      </Router>
    );
  }
}

export default App;