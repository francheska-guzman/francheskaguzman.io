import React, { Component } from 'react';

class PieDePagina extends Component {
  render() {
    return (
      <footer>
        <h6 className="bone-white">Hecho a mano por <a className="bone-white" href="http://francheskaguzman.io/es">Francheska Guzman</a>.</h6>
      	<a href="https://github.com/francheska-guzman" target="_black"><img className="logo" src="./images/logo/github.png" alt="GitHub" /></a>
      	<a href="https://www.linkedin.com/in/francheska-guzman" target="_black"><img className="logo" src="./images/logo/linkedin.png" alt="LinkedIn" /></a>
        <a href="http://francheskaguzman.io/es"><img className="logo" src="./images/logo/portfolio.png" alt="Portfolio" /></a>
        <a href="https://www.utest.com/profile/francheska-guzman/stats" target="_black"><img className="logo" src="./images/logo/utest.png" alt="uTest" /></a>
        <a href="https://twitter.com/gffrancheska" target="_black"><img className="logo" src="./images/logo/twitter.png" alt="Twitter" /></a>
      </footer>
    );
  }
}

export default PieDePagina;