import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <div className='flex-col'>
        <nav className='flex-1'>
          <ul>
            <li><a className='nav' href='#home'>Home</a></li>
            <li><a className='nav' href='#projects'>Projects</a></li>
            <li><a className='nav' href='#about'>About</a></li>
            <li><a className='nav' href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;