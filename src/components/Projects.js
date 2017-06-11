import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Projects extends Component {
  slideshow() {
  	return (
  	  <div className="slideshow">
	      <img className="browser-version" alt='Stock Market' src='images/browser/0.png' />
	      <img className="browser-version" alt='Connect Four' src='images/browser/1.png' />
	    </div>
  	)
  }

  render() {
    return (
      <div className="wrapper">  
      	{this.slideshow()}	
        <h3><NavLink to="/projects">Watch More Projects</NavLink></h3>
	  </div>
    );
  }
}

export default Projects;