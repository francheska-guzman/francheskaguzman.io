import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';

class Portfolio extends Component {
  render() {
    return (
      <div id='portfolio' className='border'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default Portfolio;