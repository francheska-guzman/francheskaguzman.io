import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id='about'>
        <h3>About</h3>
        <p className="paragraph">Hello everyone!</p><br/>
        <p className="paragraph">My name is Francheska, and I was born and raised in Puerto Rico. In 2015, after graduating from college, I moved to New York. I am a passionate web developer and a member of a crowdsourced software testing community called <a href="https://www.utest.com/profile/francheska-guzman/stats" rel="noopener noreferrer" target="_blank">uTest</a>. Eager to contribute to the society, and grow in the tech field.</p>
      </div>
    );
  }
}

export default About;