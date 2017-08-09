import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h3>About</h3>
        <p className="paragraph">I am a passionate web developer based in New York, who have a background in accounting. I am a member of a crowdsourced software testing community. I am actively learning new technologies with a can-do attitude.</p>
        <br />
        <p className="paragraph">As a recently graduated student from the Web Development Immersive program at General Assembly, I am very excited to put my knowledge and skills into practice to develop tools for our society. I am currently looking for opportunities as a web developer entry-level position in New York or remotely. Check out my <a href="https://francheska-guzman.github.io/" target="_blank" rel="noopener noreferrer">resume</a>!
        </p>
      </div>
    );
  }
}

export default About;