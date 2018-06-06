import React, { Component } from 'react';
import Typist from 'react-typist';

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <div className="vertical-center">
      	  <h1>Francheska Guzman</h1>
          <h2>
            <Typist>
        	   Full Stack Developer based in New York.
            </Typist>
          </h2>
      	  <br/>
      	  <a href="#about"><img alt="Check out my portfolio!" id="anchor" src="./images/logo/anchor-white.png" /></a>
        </div>
      </div>
    );
  }
}

export default Home;