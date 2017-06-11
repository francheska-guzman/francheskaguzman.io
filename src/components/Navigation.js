import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Francheska Guzman</h1>
    	  <nav>
    	    <ul>
    	      <li><NavLink to="#projects">Projects</NavLink></li>
    	      <li><NavLink to="#about">About</NavLink></li>
    	      <li><NavLink to="#contact">Contact</NavLink></li>
          </ul>
    	  </nav>
	  </div>
    );
  }
}

export default Navigation;