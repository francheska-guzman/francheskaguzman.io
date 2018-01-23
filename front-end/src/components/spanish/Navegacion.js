import React, { Component } from 'react';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

class Navegacion extends Component {
  render() {
    return (
      <nav>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className='inline'><a className='nav' href='#inicio'>Inicio</a></li>
          <li className='inline'><a className='nav' href='#sobre-mi'>Sobre Mi</a></li>
          <li className='inline'><a className='nav' href='#proyectos'>Proyectos</a></li>
          <li className='inline'><a className='nav' href='#contacto'>Contacto</a></li>
        </ul>
      </ScrollAnimation>
      </nav>
    );
  }
}

export default Navegacion;