import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h3>About</h3>
        <p className="paragraph">
        I am a passionate web developer based in New York, with over seven years of experience providing accounting services within the higher education sector. I am a member of a crowdsourced software testing community called uTest. 
        </p>
        <br />
        <p className="paragraph">
        As a recently graduated student from the Web Development Immersive Program at General Assembly, I am very excited to put my knowledge and skills into practice to develop tools for our society.
        I am currently looking for opportunities as an entry-level web developer position, in New York or remotely. Check out my <a href="https://francheska-guzman.github.io/" target="_blank" rel="noopener noreferrer">resume</a>!
        </p>
      </div>
    );
  }
}

export default About;