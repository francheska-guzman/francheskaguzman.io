import React, { Component } from 'react';
import Contacto from './Contacto';
import Inicio from './Inicio';
import Proyectos from './Proyectos';
import Navegacion from './Navegacion';
import SobreMi from './SobreMi';
import PieDePagina from './PieDePagina';

class Portafolio extends Component {
  render() {
    return (
      <div>
        <Inicio />
        <Navegacion />
        <SobreMi />
        <Proyectos />
        <Contacto />
      	<PieDePagina />
      </div>
    );
  }
}

export default Portafolio;