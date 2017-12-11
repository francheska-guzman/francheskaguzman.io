import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navigation from './Navigation';
import Projects from './Projects';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Home />
        <Navigation />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Portfolio;