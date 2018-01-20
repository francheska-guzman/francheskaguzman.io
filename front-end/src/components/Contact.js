import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <div className="flex-row">
          <div className="flex-2">
            <h3>Contact</h3>
            <h5>Let’s make people love using web applications even more!</h5>
            <br/>
            <h6>Francheska Guzman</h6>
            <h6>E-mail: gffrancheska@gmail.com</h6>
            <h6>Telephone: 787-410-9414</h6>
          </div>
          <div className="flex-1 resume">
            <a className="resume-link" href="https://francheska-guzman.github.io" rel="noopener noreferrer" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;