import React, { Component } from 'react';
import FourOFour from './components/Four_O_Four';
import Footer from './components/Footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';
import './App.css';

console.log("App.js is working.");

class App extends Component {
  render() {
    return (
        <Router>
	      <div>
	        <Route startsWith path="/portfolio/" component={() => (<Navigation />) }/>
	        <Switch>
	          <Route path="/portfolio/" exact component={() => (<Home />) }/>
	          <Route path="/portfolio/*" component={() => (<FourOFour />) }/>
	        </Switch>
	        <Route startsWith path="/portfolio/" component={() => (<Footer />) }/>
	      </div>
        </Router>
    );
  }
}

export default App;