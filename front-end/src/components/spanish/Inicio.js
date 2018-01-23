import React, { Component } from 'react';
import Typist from 'react-typist';

class Inicio extends Component {
  render() {
    return (
      <div id='inicio'>
        <div className="vertical-center">
      	  <h1>Francheska Guzmán</h1>
          <h2>
            <Typist>
        	   Una desarrolladora de aplicaciones localizada en Nueva York.
            </Typist>
          </h2>
      	  <br/>
      	  <a href="#about"><img alt="Check out my portfolio!" id="anchor" src="./images/logo/anchor-white.png" /></a>
        </div>
      </div>
    );
  }
}

export default Inicio;