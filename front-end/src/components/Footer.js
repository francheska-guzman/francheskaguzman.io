import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      	<a href="https://github.com/francheska-guzman" target="_black"><img className="logo" src="./images/logo/github.png" alt="GitHub" /></a>
      	<a href="https://www.linkedin.com/in/francheska-guzman" target="_black"><img className="logo" src="./images/logo/linkedin.png" alt="LinkedIn" /></a>
      	<a href="https://twitter.com/gffrancheska" target="_black"><img className="logo" src="./images/logo/twitter.png" alt="Twitter" /></a>
      </footer>
    );
  }
}

export default Footer;