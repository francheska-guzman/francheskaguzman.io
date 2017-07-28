import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h3>About</h3>
        <p className="paragraph">
        I am a recently graduated student of web developer, with a previous experience providing accounting services within the higher education sector, and collaborating as a software tester. 
        </p>
        <br />
        <p className="paragraph">
        Currently open for opportunities as a junior front-end or back-end web developer, in New York or remotely. Check out my <a href="https://francheska-guzman.github.io/" target="_blank" rel="noopener noreferrer">resume</a></h6>!
        </p>
      </div>
    );
  }
}

export default About;