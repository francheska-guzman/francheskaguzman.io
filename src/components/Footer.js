import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="wrapper">
      <footer>
		<a href="https://github.com/francheska-guzman" target="_blank" >
		  <img className="social" src="./images/github.png" /></a>
		<a href="https://linkedin.com/in/francheska-guzman/" target="_blank" >
		  <img className="social" src="./images/linkedin.png" /></a>
	  </footer>
	  </div>
    );
  }
}

export default Footer;