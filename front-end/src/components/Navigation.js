import React, { Component } from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import ScrollableAnchor from 'react-scrollable-anchor';

class Navigation extends Component {
  render() {
    return (
      <div id="navigation">

        <a href='#projects'>Projects</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>

        <ScrollableAnchor id={'projects'}><Projects /></ScrollableAnchor>
        <ScrollableAnchor id={'about'}><About /></ScrollableAnchor>
        <ScrollableAnchor id={'contact'}><Contact /></ScrollableAnchor>
        
      </div>
    );
  }
}

export default Navigation;