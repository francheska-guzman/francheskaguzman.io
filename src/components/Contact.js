import React, { Component } from 'react';
import PDF from '../documents/francheska-guzman-resume.pdf';

class Contact extends Component {
  render() {
    return (
      <div id='contact'>
        <h3>Contact</h3>
        <h5>Let’s make people love using web applications even more!</h5>
        <br/>
            <h6>Francheska Guzman</h6>
            <h6>Phone Number: 787-410-9414</h6>
            <h6>E-mail: gffrancheska@gmail.com</h6>
            <h6><a href = {PDF} target = "_blank">Press here to get my resume.</a></h6>
      </div>
    );
  }
}

export default Contact;