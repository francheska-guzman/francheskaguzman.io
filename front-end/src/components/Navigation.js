import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Projects from './Projects';
import ScrollableAnchor from 'react-scrollable-anchor';

class Navigation extends Component {
  render() {
    return (
      <div className='flex-col'>
        <nav className='flex-1'>
          <ul>
            <li><a href='#home'>Home</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
        <div id='sections' className='flex-1'>
          <ScrollableAnchor id={'home'}><Home /></ScrollableAnchor>
          <ScrollableAnchor id={'projects'}><Projects /></ScrollableAnchor>
          <ScrollableAnchor id={'about'}><About /></ScrollableAnchor>
          <ScrollableAnchor id={'contact'}><Contact /></ScrollableAnchor>
        </div>
      </div>
    );
  }
}

export default Navigation;