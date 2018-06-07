import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <h6 className="grey">Handmade by <a href="https://github.com/francheska-guzman">Francheska Guzman</a>.</h6>
      	<a href="https://github.com/francheska-guzman" target="_black"><img className="logo" src="./images/logo/github-white.png" alt="GitHub" /></a>
      	<a href="https://www.linkedin.com/in/francheska-guzman" target="_black"><img className="logo" src="./images/logo/linkedin.png" alt="LinkedIn" /></a>
        <a href="https://francheska.io"><img className="logo" src="./images/logo/portfolio.png" alt="Portfolio" /></a>
        <a href="utest.com/profile/francheska-guzman" target="_black"><img className="logo" src="./images/logo/utest.png" alt="uTest" /></a>
        <a href="https://twitter.com/gffrancheska" target="_black"><img className="logo" src="./images/logo/twitter.png" alt="Twitter" /></a>
      </footer>
    );
  }
}

export default Footer;