import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className='inline'><a className='nav' href='#home'>Home</a></li>
          <li className='inline'><a className='nav' href='#projects'>Projects</a></li>
          <li className='inline'><a className='nav' href='#about'>About</a></li>
          <li className='inline'><a className='nav' href='#contact'>Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;