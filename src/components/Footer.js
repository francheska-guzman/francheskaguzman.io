import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
      <footer>
		<a href="https://github.com/francheska-guzman" target="_blank" rel="noopener noreferrer" >
		  <img className="social" alt='GitHub' src='./images/github.png' /></a>
		<a href="https://linkedin.com/in/francheska-guzman/" target="_blank" rel="noopener noreferrer">
		  <img className="social" alt='LinkedIn' src='./images/linkedin.png' /></a>
	  </footer>
	  </div>
    );
  }
}

export default Footer;