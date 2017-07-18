import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li className='nav'><a className='nav links' href='#home'>Home</a></li>
          <li className='nav'><a className='nav links' href='#projects'>Projects</a></li>
          <li className='nav'><a className='nav links' href='#about'>About</a></li>
          <li className='nav'><a className='nav links' href='#contact'>Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;