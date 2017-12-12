import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h3>About</h3>
        <p className="paragraph">Hello everyone!</p><br/>
        <p className="paragraph">
        My name is Francheska Guzman, and I am a full-stack web developer who loves learning new technologies. Occasionally, I contribute to the <a href="https://www.utest.com/profile/francheska-guzman/about" target="_blank" rel="noopener noreferrer">uTest</a> community through executing test cases, as well performing exploratory and functional testing in web and native applications. I am currently looking for opportunities as a web developer entry level/intern position in New York or remote. Feel free to check out my <a href="https://francheska-guzman.github.io/" target="_blank" rel="noopener noreferrer">resume</a>, and more projects on <a href="https://github.com/francheska-guzman" target="_blank" rel="noopener noreferrer">GitHub</a>!
        </p>
      </div>
    );
  }
}

export default About;