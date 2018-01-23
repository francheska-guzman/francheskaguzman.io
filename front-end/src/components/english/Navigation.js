import React, { Component } from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className='inline'><a className='nav' href='#home'>Home</a></li>
          <li className='inline'><a className='nav' href='#about'>About</a></li>
          <li className='inline'><a className='nav' href='#projects'>Projects</a></li>
          <li className='inline'><a className='nav' href='#contact'>Contact</a></li>
        </ul>
        </ScrollAnimation>
      </nav>
    );
  }
}

export default Navigation;