import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
      	<a href="https://github.com/francheska-guzman" target="_black"><img className="logo" src="./images/logo/github.png" alt="GitHub" /></a>
      	<a href="https://linkedin.com/in/francheska-guzman" target="_black"><img className="logo" src="./images/logo/linkedin.png" alt="LinkedIn" /></a>
      	<a href="https://profiles.generalassemb.ly/profiles/francheska-guzman" target="_black"><img className="logo" src="./images/logo/ga.png" alt="General Assembly" /></a>
      	<a href="https://utest.com/profile/francheska-guzman/about" target="_black"><img className="logo" src="./images/logo/utest.png" alt="uTest" /></a>
      </footer>
    );
  }
}

export default Footer;