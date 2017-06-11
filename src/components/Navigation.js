import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class Navigation extends Component {
  render() {
    return (
      <div id="menu" className="wrapper">
        <h1>Francheska Guzman</h1>
    	  <nav>
    	    <ul>
    	      <li className="section"><Scrollchor to="#projects">Projects</Scrollchor></li>
    	      <li className="section"><Scrollchor to="#about">About</Scrollchor></li>
    	      <li className="section"><Scrollchor to="#contact">Contact</Scrollchor></li>
          </ul>
    	  </nav>
	  </div>
    );
  }
}

export default Navigation;