import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div id="menu" className="wrapper">
        <h1>Francheska Guzman</h1>
    	  <nav>
    	    <ul>
    	      <li className="section"><NavLink to="#projects">Projects</NavLink></li>
    	      <li className="section"><NavLink to="#about">About</NavLink></li>
    	      <li className="section"><NavLink to="#contact">Contact</NavLink></li>
          </ul>
    	  </nav>
	  </div>
    );
  }
}

export default Navigation;