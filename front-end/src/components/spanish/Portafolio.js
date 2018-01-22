import React, { Component } from 'react';
import Contacto from './Contacto';
import Inicio from './Inicio';
import SobreMi from './SobreMi';
import PieDePagina from './PieDePagina';

class Portafolio extends Component {
  render() {
    return (
      <div>
        <Inicio />
        <SobreMi />
        <Contacto />
      	<PieDePagina />
      </div>
    );
  }
}

export default Portafolio;