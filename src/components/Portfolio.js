import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import Projects from './Projects';
import Footer from './Footer';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;