import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h3>About</h3>
        <p className="paragraph">Hello everyone!</p><br/>
        <p className="paragraph">My name is Francheska and I was born and raised in San Juan, Puerto Rico. In 2015, after graduating from college, I moved to New York. I am a passionate web developer who loves learn new technologies. Eager to contribute to the society, and grow in the tech field. Feel free to checkout my <a href="https://francheska-guzman.github.io" target="_blank">resume</a> for more details regarding my experience.</p>
      </div>
    );
  }
}

export default About;