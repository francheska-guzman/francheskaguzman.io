import React, { Component } from 'react';
// Components
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FourOFour from './components/FourOFour';
import Index from './components/Index';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import ProjectsGallery from './components/ProjectsGallery';
import './App.css';
import {
        BrowserRouter as Router,
        Route,
        Switch
        } from 'react-router-dom';

console.log("App.js is working.");

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
        <Navigation />
          <Switch>
            <Route path="/" exact component={() => (<Index />) }/>
            <Route path="/projects" exact component={() => (<ProjectsGallery />) }/>
            <Route path="/#projects" exact component={() => (<Projects />) }/>
            <Route path="/#about" exact component={() => (<About />) }/>
            <Route path="/#contact" exact component={() => (<Contact />) }/>
            <Route path="/#footer" exact component={() => (<Footer />) }/>
            <Route path="/*" component={() => (<FourOFour />) }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
