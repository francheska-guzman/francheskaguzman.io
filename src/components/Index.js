import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';

class Index extends Component {
  render() {
    return (
      <div className="wrapper">
		<div id="projects">
		  <Projects />
		</div>
		<div id="about">
		  <About />
		</div>
		<div id="contact">
		  <Contact />
		</div>
		<div id="footer">
		  <Footer />
		</div>
	  </div>
    );
  }
}

export default Index;