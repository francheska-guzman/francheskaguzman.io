import React, { Component } from 'react';
import Inicio from './Inicio';
import PieDePagina from './PieDePagina';

class Portafolio extends Component {
  render() {
    return (
      <div>
        <Inicio />
      	<PieDePagina />
      </div>
    );
  }
}

export default Portafolio;