import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
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
        <Footer />
      </div>
    );
  }
}

export default Portfolio;